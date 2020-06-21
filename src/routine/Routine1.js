import React, { useState, useEffect } from 'react'
import ApiManager from "../modules/ApiManager"

export default function Routine1(props) {
  const [exercises, setExercises] = useState({ chest: [], triceps: [] })

  const getExercises = () => {
    const stateToChange = { ...exercises }
    ApiManager.getAllExercises(6).then(chestExercises => {
      stateToChange.chest = chestExercises
    }).then(e => {
      ApiManager.getAllExercises(10).then(tricepExercises => {
        stateToChange.triceps = tricepExercises
        setExercises(stateToChange)
      })
    })
  }

  useEffect(getExercises, [])

  return (
    <div>
      {exercises.chest.map(exercise => {
        return (
          <div>
            <img src={exercise.exercise.url} />
            <p>{exercise.exercise.name}</p>
            <p>Rest time: 2-3 mins</p>
          </div>
        )
      })}
      {exercises.triceps.map(exercise => {
        return (
          <div>
            <img src={exercise.exercise.url} />
            <p>{exercise.exercise.name}</p>
            <p>Rest time: 2-3 mins</p>
          </div>
        )
      })}
    </div>
  )
}
