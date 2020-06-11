import React, { useState, useEffect } from 'react'
import Login from './auth/Login'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

export default function WorkoutTracker(props) {

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
        ? <Login setUser={setUser} {...props} />
        : null}
      {hasUser
        ? <NavBar hasUser={hasUser} {...props} clearUser={clearUser} />
        : null}
      {hasUser ? <ApplicationViews />
        : null}
    </>
  )
}
