import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiManager from "../modules/ApiManager"
import { Button, Table } from 'reactstrap'


export default function Routine1(props) {

  const [exercises, setExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = useState([])
  const [numberOfRoutines, setNumberOfRoutines] = useState(null)
  const [routineName, setRoutineName] = useState({ name: "" })

  const getExercises = () => {
    ApiManager.getAll('exercises').then(exercises => {
      exercises.map(exercise => {
        exercise.check = false
        setExercises([...exercises, exercise])
      })
    })
  }

  const routineNameHandler = (event) => {
    const stateToChange = { ...routineName }
    stateToChange.name = event.target.value
    setRoutineName(stateToChange)
  }

  const onChangeHandler = (e, exercise) => {
    const stateToChange = [...selectedExercises]
    if (exercise.check) {
      exercise.check = false
      setSelectedExercises(stateToChange)
    } else {
      exercise.check = true
      if (!stateToChange.includes(exercise)) {
        setSelectedExercises([...stateToChange, exercise])
      } else {
        setSelectedExercises(stateToChange)
      }
    }
  }

  const getRoutines = () => {
    ApiManager.getAll('routines').then(e => {
      setNumberOfRoutines(e.length)
    })
  }

  const onSubmitHandler = () => {
    const trueExercisesArray = [...selectedExercises]
    const newArray = trueExercisesArray.filter(exercise => exercise.check === true)
    ApiManager.post({ name: routineName.name, userId: JSON.parse(sessionStorage.getItem('credentials'))[0].id }, 'routines').then(e => {
      newArray.map(exercise => {
        ApiManager.post({ routineId: e.id, userId: JSON.parse(sessionStorage.getItem('credentials'))[0].id, exerciseId: exercise.id }, 'routineExercises')
        props.history.push("/newWorkout")
      })
    })
  }

  useEffect(getRoutines, [])

  useEffect(getExercises, [])

  return (
    <div className="exerciseRoutineListContainer">
      <input onChange={routineNameHandler} type="text" id="routineName" placeholder="Workout Plan Name" />
      {exercises.map(exercise => {
        return (
          <Table className="exerciseListSelectorForRoutines">
            <tbody>
              <tr>
                <td><img src={exercise.url} /></td>
                <td className="exerciseNameTdRoutine">{exercise.name}</td>
                <td><input defaultChecked={false} type="checkbox" id={exercise.id} onChange={e => onChangeHandler(e, exercise)} value="Add" /></td>
              </tr>
            </tbody>
          </Table>
        )
      })}
      <Button onClick={onSubmitHandler} className="exerciseRoutineListButton">Add exercises</Button>
    </div>
  )
}
