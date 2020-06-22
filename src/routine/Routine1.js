import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiManager from "../modules/ApiManager"
import { Button } from 'reactstrap'

export default function Routine1(props) {

  const [exercises, setExercises] = useState([])

  const getExercises = () => {
    ApiManager.getRoutineExercises(1).then(routine1Exercises => {
      setExercises(routine1Exercises)
    })
  }

  useEffect(getExercises, [])

  return (
    <>
      {exercises.map(exercise => {
        return (
          <div id={`${exercise.id}`} key={exercise.id}>
            <img className="routineImages" src={exercise.exercise.url} />
            <p>{exercise.exercise.name}</p>
            <p>Rest time: 90 secs</p>
            <Button onClick={() => {
              ApiManager.delete('routineExercises', exercise.id).then(e => {
                getExercises()
              })
            }}>Delete</Button>
          </div>
        )
      })}
      <div id="routine1addNew">
        <Link to="/addExercise"><Button>Add New Exercise</Button></Link>
      </div>
      <div id="startWorkout">
        <Link to="/startRoutine1">
          <Button>Start Workout</Button>
        </Link>
      </div>
    </>
  )
}
