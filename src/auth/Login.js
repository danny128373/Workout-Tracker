import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'
import { Link } from 'react-router-dom'
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
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label className="login" htmlFor="username">Username:</label>
          <input type="text" onChange={handleFieldChange} id="username" placeholder="Enter username" />
        </fieldset>
        <fieldset>
          <label className="login" htmlFor="password">Password:</label>{' '}
          <input onChange={handleFieldChange} type="password" id="password" placeholder="Enter password" />
        </fieldset>
        <div className="registerButtonContainer">
          <Link to="register"><img id="createAccount" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592408647/Create_Account_and_Login_button_qsqin6.png" onClick={props.registerHandler} /></Link>
        </div>
        {/* <Button id="signInButton" type="submit">Sign in</Button> */}
        <Link to="/login"><img id="signIn" alt="signin" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592409847/SIGN_IN_bsw0ix.png" /></Link>
      </form>
    </>
  )
}
