import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'

export default function WorkoutLogList(props) {

  const [workouts, setWorkouts] = useState([])

  const getWorkoutLogs = () => {
    ApiManager.getAllWorkoutLogsWithUser(JSON.parse(sessionStorage.getItem('credentials'))[0].id, 'workoutLogs').then(workouts => {
      setWorkouts(workouts)
    })
  }

  useEffect(getWorkoutLogs, [])

  return (
    <>
      {workouts.reverse().map(workout => {
        return (
          <div key={workout.id}>
            <h2>Muscle(s) Trained: {workout.muscles[0]}</h2>
            {workout.sets.map(set => {
              return (
                <div key={set.id}>
                  <p>Exercise Name: {set.name}</p>
                  <p>Reps: {set.reps}</p>
                  <p>Weight: {set.weight}</p>
                </div>
              )
            })}
            Notes: {workout.notes[0]}
          </div>
        )
      })}
    </>
  )
}
