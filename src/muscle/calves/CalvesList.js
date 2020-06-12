import React, { useEffect, useState } from 'react'
import ApiManager from '../../modules/ApiManager'
import CalvesCard from './CalvesCard'

export default function CalvesList(props) {
  const [calves, setCalves] = useState([])

  const getCalves = () => {
    ApiManager.getAllExercises(4).then(calves => {
      setCalves(calves)
    })
  }

  useEffect(getCalves, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {calves.map(exercise => <CalvesCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
