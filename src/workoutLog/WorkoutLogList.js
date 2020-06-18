import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'
import {
  Table,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

export default function WorkoutLogList(props) {

  const [workouts, setWorkouts] = useState([])

  const getWorkoutLogs = () => {
    ApiManager.getAllWorkoutLogsWithUser(JSON.parse(sessionStorage.getItem('credentials'))[0].id, 'workoutLogs').then(workouts => {
      setWorkouts(workouts)
    })
  }

  const dateFormatter = (date) => {
    const newDate = date.substring(5, 7) + '/' + date.substring(date.length - 2, date.length) + '/' + date.substring(0, 4)
    return newDate
  }

  useEffect(getWorkoutLogs, [])

  return (
    <>
      {workouts.reverse().map(workout => {
        return (
          <Table body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} key={workout.id}>
            <thead>
              <tr>
                <td>{dateFormatter(workout.date)}</td>
                <td colSpan="3">Muscle(s) Trained: {workout.muscles[0]}</td>
              </tr>

              <tr>
                <th>Set #</th>
                <th>Exercise Name</th>
                <th>Reps</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {workout.sets.map((set, index) => {
                return (
                  <tr>
                    <td key={set.id}>
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

            </tbody>

          </Table>
        )
      })}
    </>
  )
}

// <CardBody>
//               <h3>{dateFormatter(workout.date)}</h3>
//               <CardTitle>Muscle(s) Trained: {workout.muscles[0]}</CardTitle>
//               {workout.sets.map((set, index) => {
//                 return (
//                   <>
//                     <CardSubtitle key={set.id}>
//                       {`Set# ${index + 1} `}: {set.name}
//                     </CardSubtitle>
//                     <CardText>
//                       Reps: {set.reps}<br />
//                       Weight: {set.weight}
//                     </CardText>
//                   </>
//                 )
//               })}
//             Notes: {workout.notes[0]}
//             </CardBody>
