import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import MuscleCard from '../MuscleCard'

export default function UpperLegsList(props) {
  const [upperLegs, setUpperLegs] = useState([])

  const getUpperLegs = () => {
    ApiManager.getAllExercises(11).then(upperlegs => {
      setUpperLegs(upperlegs)
    })
  }

  useEffect(getUpperLegs, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {upperLegs.map(exercise => <MuscleCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
