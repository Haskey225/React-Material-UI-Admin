import "./metier.scss";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCommunity } from "../../../../../datatablesource";
import { app_config } from "../../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'name': '',
  'department_id': 0
}
const CommunityForm = () => {

  const [data, setData] = useState(initialState);
  const [departmentState, setDepartmentState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }



  const saveMetier = (e) => {
    e.preventDefault()
    setCommunity(data)
  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'departments'
    })).then(resp => {
      setDepartmentState(resp.data)
    })

  }, [])

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter une commune</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom</label>
                <input onChange={(e) => handleChange(e)} name="name" placeholder='Entrez le nom du corps' />
              </div>
              <div className="formInput" >
                <label>Departement</label>
                <select onChange={(e) => handleChange(e)} name="department_id">
                  <option>{departmentState ? 'Selectionnez un departement' : 'Aucun departement'}</option>
                  {
                    departmentState ? departmentState.map((item, index) =>
                      <option key={index} value={item.id}>{item.name} </option>
                    ) : null
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

export default CommunityForm
