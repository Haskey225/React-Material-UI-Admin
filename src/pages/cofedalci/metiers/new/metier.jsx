import "./metier.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setMetier } from "../../../../datatablesource";
import { app_config } from "../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'name': '',
  'description': '',
  'branch_id': 0,
  'association_id': 0
}
const MetierForm = () => {

  const [data, setData] = useState(initialState);
  const [branchState, setBranchState] = useState(null)
  const [federationState, setFederationState] = useState(null)
  const [associationState, setAssociationState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleStateChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'branch_id':
       handleChange(e) //If branch is selected, update set branch Datas
       axios.post(app_config.host, qs.stringify({
        'action': 'find',
        'table': 'federation_br',
        'id': value
      })).then(resp => {
        setFederationState(resp.data)
        setAssociationState(null)
      })
        break;

      case 'federation':
        axios.post(app_config.host, qs.stringify({
          'action': 'find',
          'table': 'association_fed',
          'id': value
        })).then(resp => {
          setAssociationState(resp.data)
        })

        break;
      case 'association_id':
       handleChange(e);
      //  console.log(data)

        break;

      default:
        break;
    }
  }
  // const setBr = () => {
  //   console.log(GetBranch()['']);
  // setMetierState(GetBranch());
  // GetBranch().then(resp=>{
  //   setMetierState(resp);
  //   console.log(resp)
  // })
  // }


  const saveMetier = (e) => {
    e.preventDefault()
    setMetier(data)
  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'branch'
    })).then(resp => {
      setBranchState(resp.data)
    })

  }, [])

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter un corps de métier</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom</label>
                <input onChange={(e) => handleChange(e)} name="name" placeholder='Entrez le nom du corps' />
              </div>
              <div className="formInput" >
                <label>Description</label>
                <input onChange={(e) => handleChange(e)} name="description" placeholder='Entrez le decriptif' />
              </div>
              <div className="formInput" >
                <label>Branche</label>
                <select onChange={(e) => handleStateChange(e)} name="branch_id">
                  <option>Selectionnez une branche</option>
                  {
                    branchState && branchState.map((item, index) =>
                      <option value={item.id} key={index}>{item.name} </option>
                    )
                  }
                </select>
              </div>
              <div className="formInput" >
                <label>Federation</label>
                <select onChange={(e) => handleStateChange(e)} name="federation">
                  <option>Selectionnez une Federation</option>
                  {
                    federationState && federationState.map((item, index) =>
                      <option value={item.id} key={index}>{item.shirt_name} </option>
                    )
                  }
                </select>
              </div>
              <div className="formInput" >
                <label>Association</label>
                <select onChange={(e) => handleStateChange(e)} name="association_id">
                  <option>Selectionnez une association</option>
                  {
                    associationState && associationState.map((item, index) =>
                      <option value={item.id} key={index}>{item.name} </option>
                    )
                  }
                </select>
              </div>
              <button onClick={(e) => saveMetier(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetierForm
