import React from 'react'
import { Route } from 'react-router-dom'
import NewWorkout from './newWorkout/NewWorkout'
import Login from './auth/Login'
import MuscleList from './muscle/MuscleList'
import AbsList from './muscle/abs/AbsList'

export default function ApplicationViews() {
  return (
    <>
      <Route exact path="/newWorkout" render={(props) => {
        return <NewWorkout {...props} />
      }} />
      <Route exact path="/login" render={(props) => {
        return <Login {...props} />
      }} />
      <Route exact path="/abs" render={(props) => {
        return <AbsList {...props} />
      }} />
      <Route exact path="/muscle" render={(props) => {
        return <MuscleList {...props} />
      }} />
    </>
  )
}
