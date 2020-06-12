import React, { useState } from 'react'

export default function NewWorkout() {

  const [session, setSession] = useState({
    muscles: "",
    notes: "",
  })

  const handleSessionChange = (event) => setSession({
    ...session,
    [event.target.name]: [event.target.value],
  })

  const blankSet = { name: "", repetitions: "", weight: "" }

  const [set, setSet] = useState([{ ...blankSet }])

  const addSet = () => {
    setSet([...set, { ...blankSet }])
  }

  return (
    <form>
      <label htmlFor="session">Muscle(s)</label>
      <input
        type="text"
        name="muscle"
        id="muscle"
        value={session.muscles}
        onChange={handleSessionChange}
      />
      <label htmlFor="notes">Notes</label>
      <input
        type="text"
        name="notes"
        id="notes"
        value={session.muscles}
        onChange={handleSessionChange}
      />
      {/* <input type="text" name="exercise" id="exercise" placeholder="Exercise Name" />
      <input type="text" name="reps" id="reps" placeholder="Repetitions" />
      <input type="text" name="weight" id="weight" placeholder="Weight" /> */}

      {
        set.map((val, idx) => {
          const setId = `name-${idx}`;
          const repsId = `reps-${idx}`;
          const weightId = `weight-${idx}`;
          return (
            <div key={`set-${idx}`}>
              <label htmlFor={setId}>{`set #${idx + 1}`}</label>
              <input
                type="text"
                name={setId}
                data-idx={idx}
                id={setId}
                className="name"
                placeholder="Exercise Name"
              />
              <label htmlFor={repsId}>Reps</label>
              <input
                type="text"
                name={repsId}
                data-idx={idx}
                id={repsId}
                className="reps"
                placeholder="Repetitions"
              />
              <label htmlFor={weightId}>Weight</label>
              <input
                type="text"
                name={weightId}
                data-idx={idx}
                id={weightId}
                className="weight"
                placeholder="Weight"
              />
            </div>
          );
        })
      }
      <input type="button" value="Add New Set" onClick={addSet} />
      <input type="submit" value="Submit Workout Log" />
    </form>
  )
}
