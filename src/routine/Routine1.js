import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiManager from "../modules/ApiManager"
import { Button, Table } from 'reactstrap'


export default function Routine1(props) {

  const [exercises, setExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  const getExercises = () => {
    ApiManager.getAll('exercises').then(exercises => {
      setExercises(exercises)
    })
  }

  const onChangeHandler = (event) => {
    const stateToChange = [...selectedExercises]
    if (!isChecked) {
      ApiManager.get('exercises', event.target.id).then(exercise => {
        setSelectedExercises([...stateToChange, exercise])
        setIsChecked(true)
      })
    } else {
      const newArray = stateToChange.filter(exercise => exercise.id === event.target.id + 1)
      setIsChecked(false)
      setSelectedExercises([...newArray])
    }
  }

  useEffect(getExercises, [])

  return (
    <div className="exerciseRoutineListContainer">
      <input type="text" placeholder="Workout Plan Name" />
      {exercises.map(exercise => {
        return (
          <Table className="exerciseListSelectorForRoutines" key={exercise.id}>
            <tbody>
              <tr>
                <td><img src={exercise.url} /></td>
                <td className="exerciseNameTdRoutine">{exercise.name}</td>
                <td><input defaultChecked={isChecked} type="checkbox" id={exercise.id} onChange={onChangeHandler} value="Add" /></td>
              </tr>
            </tbody>
          </Table>
        )
      })}
      <Button className="exerciseRoutineListButton">Add exercises</Button>
    </div>
  )
}
