import "./metier.scss";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setArea } from "../../../../../datatablesource";
import { app_config } from "../../../../../config/app-config";


const qs = require('qs')
const initialState = {
  'name': '',
  'community_id': 0
}
const AreaForm = () => {

  const [data, setData] = useState(initialState);
  const [communityState, setCommunityState] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const saveArea = (e) => {
    e.preventDefault()
    // setMetier(data)
    setArea(data)
  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'communitys'
    })).then(resp => {
      setCommunityState(resp.data)
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
                <input onChange={(e) => handleChange(e)} name="name" placeholder='Entrez le nom' />
              </div>
              <div className="formInput" >
                <label>Commune</label>
                <select onChange={(e) => handleChange(e)} name="community_id">
                  <option>{communityState ? 'Selectionnez une branche' : 'Aucune commune selection'} </option>
                  {
                    communityState ? communityState.map((item, index) =>
                      <option key={index} value={item.id}>{item.name} </option>
                    ) : null
                  }
                </select>
              </div>
              <button onClick={(e) => saveArea(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AreaForm
