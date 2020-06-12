import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import AbsCard from './AbsCard'

export default function AbsList(props) {
  const [abs, setAbs] = useState([])

  const getAbs = () => {
    ApiManager.getAllExercises(1).then(abs => {
      setAbs(abs)
    })
  }

  useEffect(getAbs, [])

  return (
    <>
      <section className="section-content">
      </section>
      <div className="container-cards">
        {abs.map(ab => <AbsCard key={ab.id} ab={ab} {...props} />)}
      </div>
    </>
  )
}
