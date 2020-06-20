import React, { useEffect, useState } from 'react'
import ApiManager from '../modules/ApiManager'
import { Button } from 'reactstrap'

export default function ExerciseForm(props) {

  const [muscles, setMuscles] = useState([])
  const [muscleId, setMuscleId] = useState({ muscleId: "" })
  const [exercise, setExercise] = useState({ name: "", url: muscleId })

  const getMuscles = () => {
    ApiManager.getAll('muscles').then(muscleList => {
      setMuscles(muscleList)
    })
  }

  const handleFieldChange = (event) => {
    const stateToChange = { ...exercise }
    stateToChange[event.target.id] = event.target.value
    setExercise(stateToChange)
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
      ApiManager.post({ exerciseId: postedExercise.id, muscleId: muscleId.muscleId }, "muscleExercises")
      props.history.push("/muscle")
    })
  }

  useEffect(getMuscles, [])

  return (
    <div id="addNewExercise">
      <h3>Add New Exercise</h3>
      <label htmlFor="exerciseName"></label>
      <input id="name" onChange={handleFieldChange} name="exerciseName" type="text" />
      <select onChange={handleMuscleChange} id="muscleId">
        <option>Please select primary muscle</option>
        {muscles.map(muscle => <option key={muscle.id}>{muscle.name}</option>)}
      </select>
      <Button onClick={onSubmitHandler}>Submit</Button>
    </div>
  )
}
