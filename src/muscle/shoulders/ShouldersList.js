import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import MuscleCard from '../MuscleCard'

export default function ShouldersList(props) {
  const [shoulders, setShoulders] = useState([])

  const getShoulders = () => {
    ApiManager.getAllExercises(9).then(shoulders => {
      setShoulders(shoulders)
    })
  }

  useEffect(getShoulders, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {shoulders.map(exercise => <MuscleCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
