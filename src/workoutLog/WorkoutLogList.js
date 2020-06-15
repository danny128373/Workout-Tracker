import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'

export default function WorkoutLogList(props) {

  const [workouts, setWorkouts] = useState([])

  const getWorkoutLogs = () => {
    ApiManager.getAllWorkoutLogsWithUser(JSON.parse(sessionStorage.getItem('credentials'))[0].id, 'sets').then(workouts => {
      setWorkouts(workouts)
      console.log(workouts)
    })
  }

  useEffect(getWorkoutLogs, [])

  return (
    <>

    </>
  )
}
