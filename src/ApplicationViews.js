import React from 'react'
import { Route } from 'react-router-dom'
import NewWorkout from './newWorkout/NewWorkout'
import Login from './auth/Login'
import MuscleList from './muscle/MuscleList'
import AbsList from './muscle/abs/AbsList'
import BackList from './muscle/back/BackList'
import BicepsList from './muscle/biceps/BicepsList'
import CalvesList from './muscle/calves/CalvesList'
import CardioList from './muscle/cardio/CardioList'
import ChestList from './muscle/chest/ChestList'
import ForearmsList from './muscle/forearms/ForearmsList'

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
      <Route exact path="/back" render={(props) => {
        return <BackList {...props} />
      }} />
      <Route exact path="/biceps" render={(props) => {
        return <BicepsList {...props} />
      }} />
      <Route exact path="/calves" render={(props) => {
        return <CalvesList {...props} />
      }} />
      <Route exact path="/cardio" render={(props) => {
        return <CardioList {...props} />
      }} />
      <Route exact path="/chest" render={(props) => {
        return <ChestList {...props} />
      }} />
      <Route exact path="/forearms" render={(props) => {
        return <ForearmsList {...props} />
      }} />
    </>
  )
}
