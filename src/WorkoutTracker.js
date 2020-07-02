import React, { useState, useEffect } from 'react'
import Login from './auth/Login'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import { withRouter } from 'react-router-dom'
import Register from './auth/Register'
import { Button } from 'reactstrap'
import Home from './home/Home'

const WorkoutTracker = (props) => {


  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  const [hasUser, setHasUser] = useState(isAuthenticated())
  const [register, setRegister] = useState(false)
  const [login, setLogin] = useState(false)
  const [workoutBackground, setWorkoutBackground] = useState({ background: 'lightskyblue' })
  const [logsBackground, setLogsBackground] = useState({ background: '' })
  const [exercisesBackground, setExercisesBackground] = useState({ background: '' })
  const [profileBackground, setProfileBackground] = useState({ background: '' })

  const workoutHandler = () => {
    const stateToChange = { ...workoutBackground }
    const logs = { ...logsBackground }
    logs.background = 'none'
    const exercises = { ...exercisesBackground }
    exercises.background = 'none'
    const profile = { ...profileBackground }
    profile.background = 'none'
    stateToChange.background = 'lightskyblue'
    setLogsBackground(logs)
    setWorkoutBackground(stateToChange)
    setProfileBackground(profile)
    setExercisesBackground(exercises)
  }
  const logsHandler = () => {
    const stateToChange = { ...logsBackground }
    const workout = { ...workoutBackground }
    workout.background = 'none'
    const exercises = { ...exercisesBackground }
    exercises.background = 'none'
    const profile = { ...profileBackground }
    profile.background = 'none'
    stateToChange.background = 'lightskyblue'
    setLogsBackground(stateToChange)
    setWorkoutBackground(workout)
    setProfileBackground(profile)
    setExercisesBackground(exercises)
  }
  const exercisesHandler = () => {
    const stateToChange = { ...exercisesBackground }
    const workout = { ...workoutBackground }
    workout.background = 'none'
    const logs = { ...logsBackground }
    logs.background = 'none'
    const profile = { ...profileBackground }
    profile.background = 'none'
    stateToChange.background = 'lightskyblue'
    setLogsBackground(logs)
    setWorkoutBackground(workout)
    setProfileBackground(profile)
    setExercisesBackground(stateToChange)
  }
  const profileHandler = () => {
    const stateToChange = { ...profileBackground }
    const workout = { ...workoutBackground }
    workout.background = 'none'
    const exercises = { ...exercisesBackground }
    exercises.background = 'none'
    const logs = { ...logsBackground }
    logs.background = 'none'
    stateToChange.background = 'lightskyblue'
    setLogsBackground(logs)
    setWorkoutBackground(workout)
    setProfileBackground(stateToChange)
    setExercisesBackground(exercises)
  }

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

  const registerHandler = () => {
    setRegister(true)
  }


  const loginHandler = () => {
    setLogin(true)
  }

  return (
    <>

      {(!hasUser && !register && !login) ?
        <Home loginHandler={loginHandler} registerHandler={registerHandler} />
        : null}
      {!hasUser && !register && login
        ?
        <div className="loginContainer">
          <Login {...props} registerHandler={registerHandler} setUser={setUser} hasUser={hasUser} />
        </div>
        : null}
      {!hasUser && register && !login
        ?
        <div className="registerContainer">
          <Register hasUser={hasUser} registerHandler={registerHandler} sethasUser={setHasUser} setHasRegister={setRegister} setUser={setUser} register={register} {...props} setUser={setUser} />
        </div>
        : null}
      {hasUser ?
        <>
          <div className="fixed-top" id="logoAppContainer">
            <img id="logoApp" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592505933/App_icon_an9kpl.png" />
          </div>
          <ApplicationViews
            logsHandler={logsHandler}
            logsBackground={logsBackground}
            workoutHandler={workoutHandler}
            workoutBackground={workoutBackground}
            clearUser={clearUser}
            {...props} />
        </>
        : null}
      {hasUser
        ? <NavBar
          logsHandler={logsHandler}
          workoutHandler={workoutHandler}
          exercisesHandler={exercisesHandler}
          profileHandler={profileHandler}
          workoutBackground={workoutBackground}
          logsBackground={logsBackground}
          exercisesBackground={exercisesBackground}
          profileBackground={profileBackground}
          hasUser={hasUser} {...props}
          clearUser={clearUser} />
        : null}
    </>
  )
}

export default withRouter(WorkoutTracker)