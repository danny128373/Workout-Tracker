import React, { useEffect, useState } from 'react'
import ApiManager from '../modules/ApiManager'
import { Button } from 'reactstrap'

export default function ExerciseForm() {

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
    console.log(event.target.id)
    stateToChange[event.target.id] = event.target.value
    setMuscleId(stateToChange)
  }


  useEffect(getMuscles, [])

  return (
    <div>
      <label htmlFor="exerciseName"></label>
      <input id="name" onChange={handleFieldChange} name="exerciseName" type="text" />
      <select onChange={handleMuscleChange} id="muscleId">
        <option>Please select primary muscle</option>
        {muscles.map(muscle => <option>{muscle.name}</option>)}
      </select>
      <Button>Submit</Button>
    </div>
  )
}
