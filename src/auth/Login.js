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
  // !hasUser && !register
  return (
    <>
      <form className="loginForm" onSubmit={onSubmitHandler}>
        <fieldset className="usernameInLoginPage">
          <input type="text" onChange={handleFieldChange} id="username" placeholder="Enter username" />
        </fieldset>
        <fieldset>
          <input onChange={handleFieldChange} type="password" id="password" placeholder="Enter password" />
        </fieldset>

      </form>
    </>
  )
}
