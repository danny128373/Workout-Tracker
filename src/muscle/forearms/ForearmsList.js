import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import ForearmsCard from './ForearmsCard'

export default function ForearmsList(props) {
  const [forearms, setForearms] = useState([])

  const getForearms = () => {
    ApiManager.getAllExercises(7).then(forearms => {
      setForearms(forearms)
    })
  }

  useEffect(getForearms, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {forearms.map(exercise => <ForearmsCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
