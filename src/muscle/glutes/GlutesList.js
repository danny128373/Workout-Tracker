import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import MuscleCard from '../MuscleCard'

export default function GlutesList(props) {
  const [glutes, setGlutes] = useState([])

  const getGlutes = () => {
    ApiManager.getAllExercises(8).then(glutes => {
      setGlutes(glutes)
    })
  }

  useEffect(getGlutes, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {glutes.map(exercise => <MuscleCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
