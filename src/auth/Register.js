import React, { useState } from 'react'
import ApiManager from '../modules/ApiManager'
import { Button } from 'reactstrap'

export default function Register(props) {

  const [user, setUser] = useState({ name: "", username: "", password: "", age: "", height: "", weight: "" })

  const handleFormChange = (event) => {
    const stateToChange = { ...user }
    stateToChange[event.target.id] = event.target.value
    setUser({ ...stateToChange })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    // if (user.name === "" && user.username === "" && user.age === "" && user.height === "" && user.weight === "") {
    ApiManager.post(user, 'users')
    // } else {
    //   alert("Please complete all input fields")
    // }
    props.setHasRegister(false)
    props.history.push('/')
  }

  return (
    <>
      <header>
        <h1 className="site-title">
          Workout Tracker
          <br />
        </h1>
        <h6 className="site-title">Does it really count if you don't log it?</h6>
      </header>
      <form>
        <label htmlFor="name">Name:</label>
        <input onChange={handleFormChange} type="text" id="name" name="name" placeholder="Name" />
        <label htmlFor="userName">Username:</label>
        <input onChange={handleFormChange} type="text" id="username" name="username" placeholder="Username" />
        <label htmlFor="password">Password:</label>
        <input onChange={handleFormChange} type="password" id="password" name="password" placeholder="Password" />
        <label htmlFor="age">Age:</label>
        <input onChange={handleFormChange} type="text" id="age" name="age" placeholder="Age" />
        <label htmlFor="height">Height:</label>
        <input onChange={handleFormChange} type="text" id="height" name="height" placeholder="Height" />
        <label htmlFor="weight">Weight:</label>
        <input onChange={handleFormChange} type="text" id="weight" name="weight" placeholder="Weight" />
        <Button id="registerButton" onClick={onSubmitHandler}>Register Account</Button>
      </form>
    </>
  )
}
