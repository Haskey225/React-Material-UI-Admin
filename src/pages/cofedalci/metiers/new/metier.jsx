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
  'branch_id': 0
}
const MetierForm = () => {

  const [data, setData] = useState(initialState);
  const [metierState, setMetierState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
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
      setMetierState(resp.data)
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
                <select onChange={(e) => handleChange(e)} name="branch_id">
                  <option>Selectionnez une branche</option>
                  {
                    metierState && metierState.map((item, index) =>
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
