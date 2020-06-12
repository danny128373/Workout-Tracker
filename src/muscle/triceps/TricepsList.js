import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import MuscleCard from '../MuscleCard'

export default function TricepsList(props) {
  const [triceps, setTriceps] = useState([])

  const getTriceps = () => {
    ApiManager.getAllExercises(10).then(triceps => {
      setTriceps(triceps)
    })
  }

  useEffect(getTriceps, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {triceps.map(exercise => <MuscleCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
