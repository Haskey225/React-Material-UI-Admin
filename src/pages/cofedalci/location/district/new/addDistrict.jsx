import "./metier.scss";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
import { useState } from "react";


const initialState = {
  'name': '',
  'country_iso3': 'CIV'
}
const DistrictForm = () => {

  const [data, setData] = useState(initialState);

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


  const saveDistrict = (e) => {
    e.preventDefault()
    // setMetier(data)
  }

  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Ajouter un District</h1>
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
                <input readOnly value={'CIV'} name="country_iso3" placeholder='Entrez le decriptif' />
              </div>
              <button onClick={(e) => saveDistrict(e)}>Enregistrer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DistrictForm
