import React from 'react'
import { Route } from 'react-router-dom'
import NewWorkout from './newWorkout/NewWorkout'

export default function ApplicationViews() {
  return (
    <>
      <Route exact path="/newWorkout" render={(props) => {
        return <NewWorkout {...props} />
      }} />
    </>
  )
}
