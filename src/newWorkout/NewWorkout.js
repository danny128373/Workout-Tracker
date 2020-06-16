import React, { useState } from 'react'
import ApiManager from '../modules/ApiManager'
import { Button } from 'reactstrap'
import './NewWorkout.css'

export default function NewWorkout(props) {

  const [isShown, setIsShown] = useState(true)
  const blankSet = { name: "", reps: "", weight: "", workoutLogId: "", userId: JSON.parse(sessionStorage.getItem('credentials'))[0].id }
  const [session, setSession] = useState({ muscles: "", notes: "", userId: JSON.parse(sessionStorage.getItem('credentials'))[0].id })
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
    setIsShown(false)
  }

  return (
    <>
      {isShown ? <div className="buttonContainer"><Button size="lg" id="newWorkout" onClick={addWorkoutHandler}>Start New Workout</Button></div> : null}
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
                <div className="set" key={`set-${idx}`}>
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
                  {/* <label htmlFor={repsId}>Reps</label> */}
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
                  {/* <label htmlFor={weightId}>Weight</label> */}
                  <input
                    type="text"
                    name={weightId}
                    data-idx={idx}
                    id={weightId}
                    className="weight"
                    placeholder="Weight in lbs."
                    onChange={handleSetChange}
                  />
                </div>
              );
            })
          }
          <br />
          <Button id="setButton" onClick={addSet} >Add New Set</Button>
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
          <Button id="workoutButton" onClick={onSubmitHandler} >Submit Workout Log</Button>
        </form>
        : null}
    </>
  )
}
