import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import CardioCard from './CardioCard'

export default function CardioList(props) {
  const [cardio, setCardio] = useState([])

  const getCardio = () => {
    ApiManager.getAllExercises(5).then(exercises => {
      setCardio(exercises)
    })
  }

  useEffect(getCardio, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {cardio.map(exercise => <CardioCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
