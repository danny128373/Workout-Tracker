import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiManager from "../modules/ApiManager"
import { Button, Table } from 'reactstrap'


export default function Routine1(props) {

  // const [exercises, setExercises] = useState([])

  // const getExercises = () => {
  //   ApiManager.getRoutineExercises(1).then(routine1Exercises => {
  //     setExercises(routine1Exercises)
  //   })
  // }

  // useEffect(getExercises, [])

  // return (
  //   <>
  //     {exercises.map(exercise => {
  //       return (
  //         <div id={`${exercise.id}`} key={exercise.id}>
  //           <img className="routineImages" src={exercise.exercise.url} />
  //           <p>{exercise.exercise.name}</p>
  //           <p>Rest time: 90 secs</p>
  //           <Button onClick={() => {
  //             ApiManager.delete('routineExercises', exercise.id).then(e => {
  //               getExercises()
  //             })
  //           }}>Delete</Button>
  //         </div>
  //       )
  //     })}
  //     <div id="routine1addNew">
  //       <Link to="/addExercise"><Button>Add New Exercise</Button></Link>
  //     </div>
  //     <div id="startWorkout">
  //       <Link to="/startRoutine1">
  //         <Button>Start Workout</Button>
  //       </Link>
  //     </div>
  //   </>
  // )

  const [exercises, setExercises] = useState([])

  const getExercises = () => {
    ApiManager.getAll('exercises').then(exercises => {
      setExercises(exercises)
    })
  }

  useEffect(getExercises, [])

  return (
    <>
      {exercises.map(exercise => {
        return (

          <Table key={exercise.id}>
            <tbody>
              <tr>
                <td><img src={exercise.url} /></td>
                <td>{exercise.name}</td>
                <td><input name={exercise.name} type="checkbox" /></td>
              </tr>
            </tbody>

          </Table>
        )
      })}
      <Button>Add exercises</Button>
    </>
  )


}

// {
//   "id": 1,
//   "exerciseId": 1,
//   "muscleId": 6,
//   "routineId": 1
// },
// {
//   "id": 2,
//   "exerciseId": 2,
//   "muscleId": 6,
//   "routineId": 1
// },
// {
//   "id": 3,
//   "exerciseId": 27,
//   "muscleId": 6,
//   "routineId": 1
// },
// {
//   "id": 4,
//   "exerciseId": 19,
//   "muscleId": 10,
//   "routineId": 1
// },
// {
//   "id": 5,
//   "exerciseId": 20,
//   "muscleId": 10,
//   "routineId": 1
// },
// {
//   "id": 6,
//   "exerciseId": 29,
//   "muscleId": 10,
//   "routineId": 1
// },
// {
//   "routineId": 1,
//   "muscleId": 10,
//   "exerciseId": 30,
//   "id": 7
// }