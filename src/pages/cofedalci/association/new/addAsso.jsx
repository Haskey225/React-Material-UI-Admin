import "./addasso.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { setAssociation } from "../../../../datatablesource";
import { useEffect, useState } from "react";
import axios from "axios";
import { app_config } from "../../../../config/app-config";


const qs = require('qs');
const initialState = {
  'name': '',
  'description': '',
  'federation_id': 0,
  'location_id': 0
}
const AssoForm = () => {

  const [data, setData] = useState(initialState);
  const [fedState, setFedState] = useState(null);
  const [locationState, setLocationState] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  }

  const saveAssociation = (e) => {
    e.preventDefault();
    setAssociation(data)

  }

  useEffect(() => {
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'federation'
    })).then(resp => {
      setFedState(resp.data)
    })
    axios.post(app_config.host, qs.stringify({
      'action': 'find',
      'table': 'community',
      'id': null
    })).then(resp => {
      setLocationState(resp.data)
      // console.log(resp.data)
    })
  }, [])

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter une association</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>
              <div className="formInput" >
                <label>Nom de l'association</label>
                <input name="name" placeholder='entrez votre nom' onChange={(e) => handleChange(e)} />
              </div>
              <div className="formInput" >
                <label>Description</label>
                <input name="description" placeholder='entrez votre nom' onChange={(e) => handleChange(e)} />
              </div>
              <div className="formInput" >
                <label>Localité</label>
                <select name="location_id" onChange={(e) => handleChange(e)} >
                  <option>Selectionnez la localité</option>
                  {
                    locationState ? locationState.map((item, index) =>
                      <option value={item.id} key={index}>{item.name} </option>
                    ) : 'wait'
                  }
                </select>
              </div>
              <div className="formInput" >
                <label>Federation</label>
                <select name="federation_id" onChange={(e) => handleChange(e)} >
                  <option>Selectionnez la FED mère</option>
                  {
                    fedState ? fedState.map((item, index) =>
                      <option value={item.id} key={index}>{item.short_name} </option>
                    ) : 'wait'
                  }
                </select>
              </div>
              <button onClick={(e) => saveAssociation(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssoForm
