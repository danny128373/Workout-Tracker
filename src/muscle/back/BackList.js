import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import BackCard from './BackCard'

export default function BackList(props) {
  const [backs, setBacks] = useState([])

  const getBacks = () => {
    ApiManager.getAllExercises(2).then(backExercises => {
      setBacks(backExercises)
    })
  }

  useEffect(getBacks, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {backs.map(back => <BackCard key={back.id} back={back} {...props} />)}
      </div>
    </>
  )
}