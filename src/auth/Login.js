import React, { useState } from 'react'

export default function Login(props) {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleFieldChange = (event) => {
    const stateToChange = { ...credentials };
    stateToChange[event.target.id] = event.target.value;
    setCredentials(stateToChange);
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

      <form onSubmit={(event) => {
        event.preventDefault()
        props.setUser(credentials)
        props.history.push("/newWorkout")
      }}>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input type="text" onChange={handleFieldChange} id="email" placeholder="Enter email" />
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
