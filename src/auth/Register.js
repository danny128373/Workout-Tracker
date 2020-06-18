import React, { useState } from 'react'
import ApiManager from '../modules/ApiManager'
import { Link } from 'react-router-dom'
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
    ApiManager.post(user, 'users').then(e => {
      props.setHasRegister(false)
      props.history.push('/')
    })

  }

  return (
    <>
      <img id="logoRegister" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592494323/App_icon_864_x_864_sn65yw.png" />
      <p className="banner">Create Account</p>
      <form>
        <fieldset id="registrationFormField1" className="registrationFormFieldSet">
          <label htmlFor="name">Name:</label>
          <input onChange={handleFormChange} type="text" id="name" name="name" />
        </fieldset>
        <fieldset id="registrationFormField2" className="registrationFormFieldSet">
          <label htmlFor="username">Username:</label>
          <input onChange={handleFormChange} type="text" id="username" name="username" />
        </fieldset>
        <fieldset id="registrationFormField3" className="registrationFormFieldSet">
          <label htmlFor="password">Password:</label>
          <input onChange={handleFormChange} type="password" id="password" name="password" />
        </fieldset>
        <fieldset id="registrationFormField4" className="registrationFormFieldSet">
          <label htmlFor="weight">Weight:</label>
          <input onChange={handleFormChange} type="text" id="weight" name="weight" />
        </fieldset>
        <fieldset id="registrationFormField5" className="registrationFormFieldSet">
          <label htmlFor="text">Height:</label>
          <input onChange={handleFormChange} type="text" id="height" name="height" />
        </fieldset>
        <fieldset id="registrationFormField6" className="registrationFormFieldSet">
          <label htmlFor="gender">Gender:</label>
          <input onChange={handleFormChange} type="text" id="gender" name="gender" />
        </fieldset>
        <fieldset id="registrationFormField7" className="registrationFormFieldSet">
          <label htmlFor="age">Age:</label>
          <input onChange={handleFormChange} type="text" id="age" name="age" />
        </fieldset>
        <Link to="/login"><Button onClick={onSubmitHandler} id="signIn" alt="signin">Submit</Button></Link>
      </form>
    </>
  )
}
