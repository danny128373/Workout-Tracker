import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'
import {
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
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} key={workout.id}>
            <CardBody>
              <h3>{dateFormatter(workout.date)}</h3>
              <CardTitle>Muscle(s) Trained: {workout.muscles[0]}</CardTitle>
              {workout.sets.map((set, index) => {
                return (
                  <>
                    <CardSubtitle key={set.id}>
                      {`Set# ${index + 1} `}: {set.name}
                    </CardSubtitle>
                    <CardText>
                      Reps: {set.reps}<br />
                      Weight: {set.weight}
                    </CardText>
                  </>
                )
              })}
            Notes: {workout.notes[0]}
            </CardBody>
          </Card>
        )
      })}
    </>
  )
}
