import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'
import { Table } from 'reactstrap'

export default function WorkoutLogList(props) {

  const [workouts, setWorkouts] = useState([])
  const [searchResults, setSearchResults] = useState([{ results: [] }])
  const [userInput, setUserInput] = useState({ input: "" })

  const getWorkoutLogs = () => {
    ApiManager.getAllWorkoutLogsWithUser(JSON.parse(sessionStorage.getItem('credentials'))[0].id, 'workoutLogs').then(workouts => {
      setWorkouts(workouts)
    })
  }

  const handleUserInput = (event) => {
    const stateToChange = { ...userInput }
    stateToChange.input = event.target.value
    setUserInput(stateToChange)
  }

  const dateFormatter = (date) => {
    const newDate = date.substring(5, 7) + '/' + date.substring(date.length - 2, date.length) + '/' + date.substring(0, 4)
    return newDate
  }

  const getExercises = () => {
    const stateToChange = { ...searchResults }
    ApiManager.searchLogs(userInput.input, JSON.parse(sessionStorage.getItem('credentials'))[0].id).then(results => {
      stateToChange.results = results
      setSearchResults(stateToChange)
    })
  }
  //refactor by filtering searchResults and not call every key stroke by user
  useEffect(getWorkoutLogs, [])
  useEffect(getExercises, [userInput])

  const compare = (a, b) => {
    let comparison = 0;
    if (parseInt(a.weight) > parseInt(b.weight)) {
      comparison = 1;
    } else {
      comparison = -1
    }
    return comparison;
  }

  // const dateCompare = (a, b) => {
  //   let comparison = 0;
  //   if (parseInt(a.date) < parseInt(b.date)) {
  //     comparison = 1;
  //   } else {
  //     comparison = -1
  //   }
  //   return comparison;
  // }

  return (
    <>

      <div id="searchContainer" className="form-group has-search">
        <div id="withinSearchContainer">
          <span id="searchIcon" className="fa fa-search form-control-feedback"></span>
          <input id="searchExercises" className="form-control" onKeyUp={handleUserInput} type="text" placeholder="Exercise Name" />
        </div>
      </div>

      {userInput.input ?
        <Table className="logTable">
          <tr>
            <th>Date</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
          {searchResults.results.reverse().map(set => {
            return (
              <tr key={set.id}>
                <td>{dateFormatter(set.workoutLog.date)}</td>
                <td>{set.name}</td>
                <td>{set.reps}</td>
                <td>{set.weight}</td>
              </tr>
            )
          })}
        </Table>
        : null}
      {!userInput.input ?
        workouts.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        }).map(workout => {
          return (
            <Table className="logTable" key={workout.id}>
              <thead>
                <tr>
                  <td id="tableDate">{dateFormatter(workout.date)}</td>
                  <td colSpan="3"><div id="muscleGroup">Muscle Group:</div> {workout.muscles[0]}</td>
                </tr>
                <tr>
                  <th>Set</th>
                  <th>Exercise</th>
                  <th>Reps</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {workout.sets.sort(compare).map((set, index) => {
                  return (
                    <tr key={set.id} >
                      <td >
                        {`${index + 1} `}
                      </td>
                      <td>
                        {set.name}
                      </td>
                      <td>
                        {set.reps}
                      </td>
                      <td>
                        {set.weight}
                      </td>
                    </tr>
                  )
                })}
                <tr>
                  <td>Notes:</td>
                  <td colSpan="3"><div id="workoutNotesLog">{workout.notes[0]}</div> </td>
                </tr>
              </tbody>

            </Table>
          )
        }) : null}
    </>
  )
}