import React, { useState, useEffect } from 'react'
import ApiManager from '../modules/ApiManager'

export default function NewWorkout(props) {

  const [isShown, setIsShown] = useState(true)
  const blankSet = { name: "", reps: "", weight: "", workoutLogId: "" }
  const [session, setSession] = useState({ muscles: "", notes: "" })
  const [set, setSet] = useState([{ ...blankSet }])

  const handleSessionChange = (event) => {
    setSession({ ...session, [event.target.name]: [event.target.value], })
  }

  const addSet = () => {
    setSet([...set, { ...blankSet }])
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

  const onSubmitHandler = (event) => {
    event.preventDefault()
    ApiManager.post(session, 'workoutLogs')
    set.map(exercise => {
      ApiManager.post(exercise, "sets")
    })
    props.history.push("/workoutLogs")
  }

  const addWorkoutHandler = (event) => {
    ApiManager.post({ muscles: "", notes: "" }, 'workoutLogs')
    setIsShown(false)
  }

  return (
    <>
      {isShown ? <button id="newWorkout" onClick={addWorkoutHandler}>Start New Workout</button> : null}
      {!isShown ?
        <form>
          <label htmlFor="session">Muscle(s)</label>
          <input
            type="text"
            name="muscles"
            id="muscles"
            value={session.muscles}
            onChange={handleSessionChange}
            placeholder="Muscle(s) trained"
          />
          <br />

          {
            set.map((val, idx) => {
              const setId = `name-${idx}`;
              const repsId = `reps-${idx}`;
              const weightId = `weight-${idx}`;
              return (
                <div key={`set-${idx}`}>
                  <label htmlFor={setId}>{`Set #${idx + 1}`}</label>
                  <input
                    type="text"
                    name={setId}
                    data-idx={idx}
                    id={setId}
                    className="name"
                    placeholder="Exercise Name"
                    onChange={handleSetChange}
                  />
                  <br />
                  <label htmlFor={repsId}>Reps</label>
                  <input
                    type="text"
                    name={repsId}
                    data-idx={idx}
                    id={repsId}
                    className="reps"
                    placeholder="Repetitions"
                    onChange={handleSetChange}

                  />
                  <br />
                  <label htmlFor={weightId}>Weight</label>
                  <input
                    type="text"
                    name={weightId}
                    data-idx={idx}
                    id={weightId}
                    className="weight"
                    placeholder="Weight"
                    onChange={handleSetChange}
                  />
                </div>
              );
            })
          }
          <br />
          <input type="button" value="Add New Set" onClick={addSet} />
          <br />
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            id="notes"
            value={session.notes}
            onChange={handleSessionChange}
            placeholder="Notes about your workout"
          />
          <br />
          <input type="submit" onClick={onSubmitHandler} value="Submit Workout Log" />
        </form>
        : null}
    </>
  )
}
