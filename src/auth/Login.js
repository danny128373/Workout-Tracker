import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'

export default function Login(props) {

  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [usersFromApi, setUsersFromApi] = useState([])
  const [usernameMatch, setUsernameMatch] = useState(false)

  const handleFieldChange = (event) => {
    const stateToChange = { ...credentials }
    stateToChange[event.target.id] = event.target.value
    if (usersFromApi.find(user => user.username === credentials.username)) {
      setUsernameMatch(true)
    } else {
      setUsernameMatch(false)
    }
    setCredentials(stateToChange)
  }

  const getAllUsers = () => {
    ApiManager.getAll('users').then(users => {
      setUsersFromApi(users)
    })
  }

  useEffect(getAllUsers, [])


  const onSubmitHandler = (event) => {
    event.preventDefault()
    const userThatMatched = usersFromApi.filter(user => user.username === credentials.username)
    if (usernameMatch) {
      props.setUser(userThatMatched)
      props.history.push("/newWorkout")
    } else {
      alert('Username and/or password did not match. Please try again.')
    }
  }

  return (
    <>
      <header>
        <h1 className="site-title">
          Workout Tracker
        <br />
          <small>Does it really count if you don't log it?</small>
        </h1>
      </header>

      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input type="text" onChange={handleFieldChange} id="username" placeholder="Enter username" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input onChange={handleFieldChange} type="password" id="password" placeholder="Enter password" />
        </fieldset>
        <button type="submit">Sign in</button>
      </form>

    </>
  )
}
