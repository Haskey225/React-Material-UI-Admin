import "./addfed.scss";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setAssociationPresi } from "../../../../../datatablesource";
import { app_config } from "../../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'name': '',
  'contact': '',
  'association_id': 0
}
const AssociationPresiForm = () => {

  const [data, setData] = useState(initialState);
  const [associationState, setAssociationState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  // const setBr = () => {
  //   console.log(GetBranch()['']);
  // setAssociationState(GetBranch());
  // GetBranch().then(resp=>{
  //   setAssociationState(resp);
  //   console.log(resp)
  // })
  // }


  const saveAssociationPresi = (e) => {
    e.preventDefault()
    setAssociationPresi(data)
  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'association'
    })).then(resp => {
      setAssociationState(resp.data)
    })

  }, [])

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter un president d'association</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom</label>
                <input onChange={(e) => handleChange(e)} name="name" placeholder='Entrez le nom ' />
              </div>
              <div className="formInput" >
                <label>Contact</label>
                <input type="tel" onChange={(e) => handleChange(e)} name="contact" placeholder='Contact' />
              </div>
              <div className="formInput" >
                <label>Association</label>
                <select onChange={(e) => handleChange(e)} name="association_id">
                  <option>Selectionnez une association</option>
                  {
                    associationState && associationState.map((item, index) =>
                      <option value={item.id} key={index}>{item.name}</option>
                    )
                  }
                </select>
              </div>
              <button onClick={(e) => saveAssociationPresi(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssociationPresiForm
