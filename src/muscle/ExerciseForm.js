import React, { useEffect, useState } from 'react'
import ApiManager from '../modules/ApiManager'
import { Button } from 'reactstrap'

export default function ExerciseForm(props) {

  const [muscles, setMuscles] = useState([])
  const [muscleId, setMuscleId] = useState({ muscleId: "" })
  const [exercise, setExercise] = useState({ name: "", url: muscleId })
  const [routines, setRoutines] = useState([])
  const [routineId, setRoutineId] = useState({ routineId: "" })

  const getMuscles = () => {
    ApiManager.getAll('muscles').then(muscleList => {
      setMuscles(muscleList)
    })
  }

  const getRoutines = () => {
    ApiManager.getAll('routines').then(routines => {
      setRoutines(routines)
    })
  }

  const handleFieldChange = (event) => {
    const stateToChange = { ...exercise }
    stateToChange[event.target.id] = event.target.value
    setExercise(stateToChange)
  }

  const handleGroupChange = (event) => {
    const stateToChange = { ...routineId }
    stateToChange[event.target.id] = event.target.value
    setRoutineId(stateToChange)
    const routineObject = routines.filter(routine => routine.name === stateToChange[event.target.id])
    stateToChange[event.target.id] = routineObject[0].id
    setRoutineId(stateToChange)
  }

  const handleMuscleChange = (event) => {
    const stateToChange = { ...muscleId }
    stateToChange[event.target.id] = event.target.value
    const muscleObject = muscles.filter(muscle => muscle.name === stateToChange[event.target.id])
    stateToChange[event.target.id] = muscleObject[0].id
    setMuscleId(stateToChange)
    ApiManager.get('muscles', muscleObject[0].id).then(muscle => {
      setExercise({ ...exercise, url: muscle.url })
    })
  }

  const onSubmitHandler = () => {
    ApiManager.post(exercise, 'exercises').then(postedExercise => {
      ApiManager.post({ exerciseId: postedExercise.id, muscleId: muscleId.muscleId }, "muscleExercises").then(exercise => {
        ApiManager.post({ routineId: routineId.routineId, userId: JSON.parse(sessionStorage.getItem('credentials'))[0].id, exerciseId: postedExercise.id }, 'routineExercises')
      })
    })
    props.history.push("/newWorkout")
  }

  useEffect(getMuscles, [])
  useEffect(getRoutines, [])

  return (
    <div id="addNewExercise">
      <h3>Add New Exercise</h3>
      <label htmlFor="exerciseName"></label>
      <input id="name" placeholder="Please Enter Exercise Name" className="inputExerciseForm" onChange={handleFieldChange} name="exerciseName" type="text" />
      <select onChange={handleMuscleChange} id="muscleId">
        <option>Please select primary muscle</option>
        {muscles.map(muscle => <option key={muscle.id}>{muscle.name}</option>)}
      </select>
      {/* <select onChange={handleGroupChange} id="routineId">
        <option>Please select muscle group</option>
        {routines.map(routine => <option key={routine.id}>{routine.name}</option>)}
      </select> */}
      <Button onClick={onSubmitHandler}>Submit</Button>
    </div>
  )
}
