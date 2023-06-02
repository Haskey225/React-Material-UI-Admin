import React, { useContext } from 'react'

import { DarkModeContext } from '../../context/darkModeContext'

const Login = () => {
  const { setIsLogged, isLoagged } = useContext(DarkModeContext)

  return (
    <div className="login">Login Page
      <button onClick={() => setIsLogged(!isLoagged)}>DashBoad</button>
    </div>
  )
}

export default Login
