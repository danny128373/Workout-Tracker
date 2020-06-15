import React, { useState, useEffect } from 'react'
import Login from './auth/Login'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import { withRouter } from 'react-router-dom'
import Register from './auth/Register'

const WorkoutTracker = (props) => {


  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  const [hasUser, setHasUser] = useState(isAuthenticated())
  const [register, setRegister] = useState(false)

  useEffect(() => {
    setHasUser(isAuthenticated());
  }, [])

  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user))
    setHasUser(isAuthenticated())
  }

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  const registerHandler = () => {
    setRegister(true)
  }

  return (
    <>
      {!hasUser && !register
        ?
        <>
          <Login {...props} setUser={setUser} />
          <button onClick={registerHandler} >Register</button>
        </>
        : null}
      {!hasUser && register
        ? <Register {...props} setUser={setUser} />
        : null}
      {hasUser && register
        ? <NavBar hasUser={hasUser} {...props} clearUser={clearUser} />
        : null}
      {hasUser
        ? <ApplicationViews />
        : null}
    </>
  )
}

export default withRouter(WorkoutTracker)