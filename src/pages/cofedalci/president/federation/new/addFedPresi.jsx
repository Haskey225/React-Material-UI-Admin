import "./addfed.scss";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setFederationPresi } from "../../../../../datatablesource";
import { app_config } from "../../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'name': '',
  'contact': '',
  'federation_id': 0,
}
const FederationPresiForm = () => {

  const [data, setData] = useState(initialState);
  const [federation, setFederation] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })

  }
  // const setBr = () => {
  //   console.log(GetBranch()['']);
  // setFederation(GetBranch());
  // GetBranch().then(resp=>{
  //   setFederation(resp);
  //   console.log(resp)
  // })
  // }


  const saveFederationPresi = (e) => {
    e.preventDefault()
    console.log(data)
    setFederationPresi(data)
  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'federation'
    })).then(resp => {
      setFederation(resp.data)
    })

  }, [])

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter un president de federation</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom</label>
                <input onChange={(e) => handleChange(e)} name="name" placeholder='Entrez le nom abreger' />
              </div>
              <div className="formInput" >
                <label>Contact</label>
                <input type="tel" onChange={(e) => handleChange(e)} name="contact" placeholder='Entrez le nom complet de la federation' />
              </div>
              <div className="formInput" >
                <label>Federaion</label>
                <select onChange={(e) => handleChange(e)} name="federation_id">
                  <option>Selectionnez la federation</option>
                  {
                    federation && federation.map((item, index) =>
                      <option value={item.id} key={index}>{item.short_name} </option>
                    )
                  }
                </select>
              </div>
              <button onClick={(e) => saveFederationPresi(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FederationPresiForm
