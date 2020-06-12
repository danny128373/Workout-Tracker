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

  const deleteAbs = id => {
    //   ApiManager.delete(id, 'products')
    //     .then(() => ApiManager.getAll('products').then(setProducts));
  }

  useEffect(getAbs, [])

  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/products/new") }}>
          Add New Exercise
        </button>
      </section>
      <div className="container-cards">
        {abs.map(ab => <AbsCard key={ab.id} ab={ab} deleteAbs={deleteAbs} {...props} />)}
      </div>
    </>
  )
}
