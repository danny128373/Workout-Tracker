import React, { useState, useEffect } from 'react'
import Login from './auth/Login'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import { withRouter } from 'react-router-dom'

const WorkoutTracker = (props) => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  const [hasUser, setHasUser] = useState(isAuthenticated())

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

  return (
    <>
      {!hasUser
        ? <Login {...props} setUser={setUser} />
        : null}
      {hasUser
        ? <NavBar hasUser={hasUser} {...props} clearUser={clearUser} />
        : null}
      {hasUser ? <ApplicationViews />
        : null}
    </>
  )
}

export default withRouter(WorkoutTracker)