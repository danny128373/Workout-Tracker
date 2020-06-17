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
      <form id="loginPageForm" className="loginForm">
        <fieldset className="usernameInLoginPage">
          <input type="text" onChange={handleFieldChange} id="username" placeholder="Enter username" />
        </fieldset>
        <fieldset className="passwordInLoginPage">
          <input onChange={handleFieldChange} type="password" id="password" placeholder="Enter password" />
        </fieldset>
        <img id="loginButtonLoginPage" alt="submit" onClick={onSubmitHandler} src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592417231/Submit_button_230_x_40_2_mmd1ob.png" />
      </form>
    </>
  )
}
