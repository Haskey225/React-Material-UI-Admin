import "./metier.scss";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { app_config } from "../../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'name': '',
  'district_id': 0
}
const RegionForm = () => {

  const [data, setData] = useState(initialState);
  const [districtState, setDistrictState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
 


  const saveRegion = (e) => {
    e.preventDefault()
    // setMetier(data)
  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'district'
    })).then(resp => {
      setDistrictState(resp.data)
    })

  }, [])

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter une region</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom</label>
                <input onChange={(e) => handleChange(e)} name="name" placeholder='Entrez le nom du corps' />
              </div>
              <div className="formInput" >
                <label>District</label>
                <select onChange={(e) => handleChange(e)} name="district_id">
                  <option>{districtState ? 'Selectionnez le district' : 'Aucun district'} </option>
                  {
                    districtState? districtState.map((item, index) =>
                      <option key={index} value={item.id}>{item.name} </option>
                    ) : null
                  }
                </select>
              </div>
              <button onClick={(e) => saveRegion(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegionForm
