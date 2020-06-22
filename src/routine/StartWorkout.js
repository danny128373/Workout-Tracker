import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import ApiManager from '../modules/ApiManager'

export default function StartWorkout(props) {
  const blankSet = { name: "", reps: "", weight: "", workoutLogId: "", userId: JSON.parse(sessionStorage.getItem('credentials'))[0].id }
  const [exercises, setExercises] = useState([])
  const [session, setSession] = useState({ date: "", muscles: ["Chest and Triceps"], notes: [""], userId: JSON.parse(sessionStorage.getItem('credentials'))[0].id })
  const [set, setSet] = useState([{ ...blankSet }])

  const getExercses = () => {
    ApiManager.getRoutineExercises(1).then(exercises => {
      setExercises(exercises)
    })
  }

  const handleSubmitLog = () => {
    ApiManager.post(session, 'workoutLogs')
    set.map(exercise => {
      ApiManager.post(exercise, "sets").then(e => {
        props.history.push("/workoutLogs")
      })
    })
  }

  const handleSetChange = (event) => {
    const updatedSet = [...set]
    updatedSet[event.target.dataset.idx][event.target.className] = event.target.value
    ApiManager.getAll('workoutLogs').then(workouts => {
      set.map(exercise => {
        exercise.workoutLogId = workouts[workouts.length - 1].id + 1
      })
      setSet(updatedSet)
    })
  }

  const handleDate = (event) => {
    setSession({ ...session, date: event.target.value })
  }

  const handleSessionChange = (event) => {
    setSession({ ...session, [event.target.name]: [event.target.value], })
  }

  useEffect(getExercses, [])

  return (
    <>
      <input onChange={handleDate} id="dateRequired" type="date" name="dateRequired" />

      <div className="startRoutine">
        {exercises.map((exercise, idx) => {
          const setId = `name-${idx}`
          const repsId = `reps-${idx}`
          const weightId = `weight-${idx}`

          return (
            <>
              <div key={exercise.id}>
                <img src={exercise.exercise.url} />
                <p name={repsId}
                  data-idx={idx}
                  id={repsId}
                  className="reps">
                  {exercise.exercise.name}
                </p>

                <div className="set" key={`set-${idx}`}>
                  {/* <label htmlFor={repsId}>Reps</label> */}
                  <input
                    type="text"
                    name={repsId}
                    data-idx={idx}
                    id={repsId}
                    className="reps"
                    placeholder="Reps"
                    onChange={handleSetChange}

                  />
                  <br />
                  {/* <label htmlFor={weightId}>Weight</label> */}
                  <input
                    type="text"
                    name={weightId}
                    data-idx={idx}
                    id={weightId}
                    className="weight"
                    placeholder="Weight"
                    onChange={handleSetChange}
                  />
                  <input
                    type="text"
                    name={repsId}
                    data-idx={idx}
                    id={repsId + 1}
                    className="reps"
                    placeholder="Reps"
                    onChange={handleSetChange}

                  />
                  <br />
                  {/* <label htmlFor={weightId}>Weight</label> */}
                  <input
                    type="text"
                    name={weightId}
                    data-idx={idx}
                    id={weightId + 1}
                    className="weight"
                    placeholder="Weight"
                    onChange={handleSetChange}
                  />
                  <input
                    type="text"
                    name={repsId}
                    data-idx={idx}
                    id={repsId + 2}
                    className="reps"
                    placeholder="Reps"
                    onChange={handleSetChange}

                  />
                  <br />
                  {/* <label htmlFor={weightId}>Weight</label> */}
                  <input
                    type="text"
                    name={weightId}
                    data-idx={idx}
                    id={weightId + 2}
                    className="weight"
                    placeholder="Weight"
                    onChange={handleSetChange}
                  />
                </div>
              </div>

            </>
          )
        })}
        <div>
          <label htmlFor="notes">Notes about this workout</label><br />
          <input
            type="text"
            name="notes"
            id="notes"
            value={session.notes}
            onChange={handleSessionChange}
            placeholder="Notes about your workout"
          />
        </div>
        <Button onClick={handleSubmitLog}>Submit Log</Button>
      </div>
    </>
  )
}
