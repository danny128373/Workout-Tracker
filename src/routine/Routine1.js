import React, { useState, useEffect } from 'react'
import ApiManager from "../modules/ApiManager"
import { Button } from 'reactstrap'

export default function Routine1(props) {
  // const [exercises, setExercises] = useState({ chest: [], triceps: [] })

  // const getExercises = () => {
  //   const stateToChange = { ...exercises }
  //   ApiManager.getAllExercises(6).then(chestExercises => {
  //     stateToChange.chest = chestExercises
  //   }).then(e => {
  //     ApiManager.getAllExercises(10).then(tricepExercises => {
  //       stateToChange.triceps = tricepExercises
  //       setExercises(stateToChange)
  //     })
  //   })
  // }

  // useEffect(getExercises, [])

  // const deleteFromRoutine = () => {
  //   ApiManager.delete('routineExercises', )
  // }

  // return (
  //   <div>
  //     {exercises.chest.map(exercise => {
  //       return (
  //         <div key={exercise.id}>
  //           <img className="routineImages" src={exercise.exercise.url} />
  //           <p>{exercise.exercise.name}</p>
  //           <p>Rest time: 2-3 mins</p>
  //           {/* add delete button(trashcan icon) */}
  //           <Button onClick={deleteFromRoutine}>Delete</Button>
  //         </div>
  //       )
  //     })}
  //     {exercises.triceps.map(exercise => {
  //       return (
  //         <div key={exercise.id}>
  //           <img className="routineImages" src={exercise.exercise.url} />
  //           <p>{exercise.exercise.name}</p>
  //           <p>Rest time: 2-3 mins</p>
  //         </div>
  //       )
  //     })}

  //   </div>
  //)

  const [exercises, setExercises] = useState([])

  const getExercises = () => {
    ApiManager.getRoutineExercises(1).then(routine1Exercises => {
      setExercises(routine1Exercises)
    })
  }

  useEffect(getExercises, [])

  return (
    <div>
      {exercises.map(exercise => {
        return (
          <div id={`${exercise.id}`} key={exercise.id}>
            <img className="routineImages" src={exercise.exercise.url} />
            <p>{exercise.exercise.name}</p>
            <p>Rest time: 2-3 mins</p>
            <Button onClick={() => {
              ApiManager.delete('routineExercises', exercise.id).then(e => {
                getExercises()
              })
            }}>Delete</Button>
          </div>
        )
      })}
    </div>
  )
}
