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
import GlutesList from './muscle/glutes/GlutesList'
import ShouldersList from './muscle/shoulders/ShouldersList'
import TricepsList from './muscle/triceps/TricepsList'
import UpperLegsList from './muscle/upperlegs/UpperLegsList'
import Profile from './profile/Profile'
import WorkoutLogList from './workoutLog/WorkoutLogList'
import Register from './auth/Register'
import Home from './home/Home'
import ExerciseForm from './muscle/ExerciseForm'
import Routine1 from './routine/Routine1'
import StartWorkout from './routine/StartWorkout'
import AbsDetails from './muscle/abs/AbsDetails'

export default function ApplicationViews(props) {
  const clearUser = props.clearUser

  return (
    <>
      <div className="workoutContainer">
        <Route exact path="/newWorkout" render={(props) => {
          return <NewWorkout {...props} />
        }} />
      </div>
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
      <Route exact path="/glutes" render={(props) => {
        return <GlutesList {...props} />
      }} />
      <Route exact path="/shoulders" render={(props) => {
        return <ShouldersList {...props} />
      }} />
      <Route exact path="/triceps" render={(props) => {
        return <TricepsList {...props} />
      }} />
      <Route exact path="/upperlegs" render={(props) => {
        return <UpperLegsList {...props} />
      }} />
      <Route exact path="/profile" render={(props) => {
        return <Profile {...props} clearUser={clearUser} />
      }} />
      <div id="workoutLogContainer">
        <Route exact path="/workoutLogs" render={(props) => {
          return <WorkoutLogList {...props} />
        }} />
      </div>
      <Route exact path="/register" render={(props) => {
        return <Register {...props} />
      }} />
      <Route exact path="/" render={(props) => {
        return <Home {...props} />
      }} />
      <Route exact path="/addExercise" render={(props) => {
        return <ExerciseForm {...props} />
      }} />
      <Route exact path="/routine1" render={(props) => {
        return <Routine1 {...props} />
      }} />
      <Route exact path="/startRoutine1" render={(props) => {
        return <StartWorkout {...props} />
      }} />
      <Route path="/abs/:exerciseId(\d+)" render={props => {
        return <AbsDetails exerciseId={parseInt(props.match.params.exerciseId)} {...props} />
      }} />
    </>
  )
}
