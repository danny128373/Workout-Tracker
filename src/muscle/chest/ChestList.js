import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import ChestCard from './ChestCard'

export default function ChestList(props) {
  const [chest, setAbs] = useState([])

  const getChest = () => {
    ApiManager.getAllExercises(6).then(chest => {
      setAbs(chest)
    })
  }

  useEffect(getChest, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {chest.map(exercise => <ChestCard key={exercise.id} exercise={exercise} {...props} />)}
      </div>
    </>
  )
}
