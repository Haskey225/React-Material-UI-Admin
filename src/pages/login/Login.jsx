import './login.scss'
import React, { useContext, useState } from 'react'

import { DarkModeContext } from '../../context/darkModeContext'
import { app_config } from '../../config/app-config'
import axios from 'axios'

const qs = require('qs')
const initialState = {
  'image': null,
  'submit': 'telecharger'
}
const Login = () => {
  const { setIsLogged, isLoagged } = useContext(DarkModeContext)
  const [data, setData] = useState(initialState)
  const onFileCHange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  }
  const submitForm = (e) => {
    e.preventDefault();
    axios.post(app_config.test, qs.stringify(data))
      .then(resp => {
        console.log(resp.data)
      })
  }


  return (
    <div className='container'>
      <div className="login">Login Page
        <button onClick={() => setIsLogged(!isLoagged)}>DashBoad</button>
        <form method="POST" action={app_config.test} enctype="multipart/form-data">
          <input type="file" name="image" required onChange={(e) => onFileCHange(e)} />
          <input type="submit" name="submit" value="Télécharger" onClick={(e) => submitForm(e)} />
        </form>
      </div>
    </div>
  )
}

export default Login
