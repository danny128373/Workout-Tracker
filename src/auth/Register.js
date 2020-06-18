import React, { useState } from 'react'
import ApiManager from '../modules/ApiManager'
import { Link } from 'react-router-dom'

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
      <form id='registrationFormParent'>
        <fieldset id="registrationFormField1" className="registrationFormFieldSet">
          <input onChange={handleFormChange} type="text" id="name" name="name" placeholder="" />
        </fieldset>
        <fieldset id="registrationFormField2" className="registrationFormFieldSet">
          <input onChange={handleFormChange} type="text" id="username" name="username" placeholder="" />
        </fieldset>
        <fieldset id="registrationFormField3" className="registrationFormFieldSet">
          <input onChange={handleFormChange} type="password" id="password" name="password" placeholder="" />
        </fieldset>
        <fieldset id="registrationFormField4" className="registrationFormFieldSet">
          <input onChange={handleFormChange} type="text" id="weight" name="weight" placeholder="" />
        </fieldset>
        <fieldset id="registrationFormField5" className="registrationFormFieldSet">
          <input onChange={handleFormChange} type="text" id="height" name="height" placeholder="" />
        </fieldset>
        <fieldset id="registrationFormField6" className="registrationFormFieldSet">
          <input onChange={handleFormChange} type="text" id="gender" name="gender" placeholder="" />
        </fieldset>
        <fieldset id="registrationFormField7" className="registrationFormFieldSet">
          <input onChange={handleFormChange} type="text" id="age" name="age" placeholder="" />
        </fieldset>
        <Link to="/login"><img onClick={onSubmitHandler} id="signIn" alt="signin" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592409847/SIGN_IN_bsw0ix.png" /></Link>
      </form>
    </>
  )
}
