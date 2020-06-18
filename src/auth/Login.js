import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'
import { Button } from 'reactstrap'

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
      <p className="banner">Login</p>
      <img className="logo" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592494323/App_icon_864_x_864_sn65yw.png" />
      <form className="loginForm">
        <fieldset className="usernameInLoginPage">
          <label htmlFor="username">Username:</label>
          <input type="text" onChange={handleFieldChange} id="username" />
        </fieldset>
        <fieldset className="passwordInLoginPage">
          <label htmlFor="username">Password:</label>
          <input onChange={handleFieldChange} type="password" id="password" />
        </fieldset>
        <Button id="loginButtonLoginPage" onClick={onSubmitHandler}>Submit</Button>
      </form>
    </>
  )
}
