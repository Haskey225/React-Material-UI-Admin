import "./metier.scss";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setDepartment } from "../../../../../datatablesource";
import { app_config } from "../../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'name': '',
  'region': 0
}
const DepartmentForm = () => {

  const [data, setData] = useState(initialState);
  const [regionState, setRegionState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }



  const saveDepartment = (e) => {
    e.preventDefault()
    setDepartment(data)
  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'regions'
    })).then(resp => {
      setRegionState(resp.data)
    })

  }, [])

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter un departement</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom</label>
                <input onChange={(e) => handleChange(e)} name="name" placeholder='Entrez le nom du departement' />
              </div>
              <div className="formInput" >
                <label>Region</label>
                <select onChange={(e) => handleChange(e)} name="region">
                  <option>{regionState ? 'Selectionnez une région' : 'Aucune region disponible'} </option>
                  {
                    regionState ? regionState.map((item, index) =>
                      <option key={index} value={item.id}>{item.name} </option>
                    ) : null
                  }
                </select>
              </div>
              <button onClick={(e) => saveDepartment(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentForm
