import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import BicepsCard from './BicepsCard'

export default function BicepsList(props) {
  const [biceps, setBiceps] = useState([])

  const getBiceps = () => {
    ApiManager.getAllExercises(3).then(biceps => {
      setBiceps(biceps)
    })
  }

  useEffect(getBiceps, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {biceps.map(exercise => <BicepsCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
