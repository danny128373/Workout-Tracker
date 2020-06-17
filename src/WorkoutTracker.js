import React, { useState, useEffect } from 'react'
import Login from './auth/Login'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import { withRouter } from 'react-router-dom'
import Register from './auth/Register'
import { Button } from 'reactstrap'
import Home from './home/Home'

const WorkoutTracker = (props) => {


  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  const [hasUser, setHasUser] = useState(isAuthenticated())
  const [register, setRegister] = useState(false)
  const [login, setLogin] = useState(false)

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


  const loginHandler = () => {
    setLogin(true)
  }

  return (
    <>

      {(!hasUser && !register && !login) ?
        <Home loginHandler={loginHandler} registerHandler={registerHandler} />
        : null}
      {!hasUser && !register && login
        ?
        <div className="loginContainer">
          <Login {...props} registerHandler={registerHandler} setUser={setUser} hasUser={hasUser} />
        </div>
        : null}
      {!hasUser && register && !login
        ? <Register hasUser={hasUser} registerHandler={registerHandler} sethasUser={setHasUser} setHasRegister={setRegister} setUser={setUser} register={register} {...props} setUser={setUser} />
        : null}
      {hasUser
        ? <NavBar hasUser={hasUser} {...props} clearUser={clearUser} />
        : null}
      {hasUser
        ? <ApplicationViews clearUser={clearUser} {...props} />
        : null}
    </>
  )
}

export default withRouter(WorkoutTracker)