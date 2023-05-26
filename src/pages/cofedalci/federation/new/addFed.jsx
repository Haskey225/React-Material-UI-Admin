import "./addfed.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setFederation } from "../../../../datatablesource";
import { app_config } from "../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'short_name': '',
  'full_name': '',
  'description': '',
  'branch': 0
}
const FederationForm = () => {

  const [data, setData] = useState(initialState);
  const [branchState, setBranchState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  // const setBr = () => {
  //   console.log(GetBranch()['']);
    // setBranchState(GetBranch());
    // GetBranch().then(resp=>{
    //   setBranchState(resp);
    //   console.log(resp)
    // })
  // }


  const saveFederation = (e) => {
    // e.preventDefault()
    setFederation(data)
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
          <h1>Ajouter une federation</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom abregé</label>
                <input onChange={(e) => handleChange(e)} name="short_name" placeholder='Entrez le nom abreger' />
              </div>
              <div className="formInput" >
                <label>Nom complet</label>
                <input onChange={(e) => handleChange(e)} name="full_name" placeholder='Entrez le nom complet de la federation' />
              </div>
              <div className="formInput" >
                <label>Description</label>
                <input onChange={(e) => handleChange(e)} name="description" placeholder='Entrez le decriptif' />
              </div>
              <div className="formInput" >
                <label>Branche</label>
                <select onChange={(e) => handleChange(e)} name="branch">
                  <option>Selectionnez une branche</option>
                  {
                    branchState && branchState.map((item, index) =>
                      <option value={item.id} key={index}>{item.name} </option>
                    )
                  }
                </select>
              </div>
              <button onClick={(e) => saveFederation(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FederationForm
