import React, { useEffect, useState } from 'react'
import ApiManager from '../../modules/ApiManager'

export default function AbsDetails(props) {

  const [abs, setAbs] = useState({ name: "", description: "", url: "" })

  const getExercise = () => {
    ApiManager.get('exercises', props.exerciseId).then(abs => {
      setAbs({
        name: abs.name,
        description: abs.description,
        url: abs.url
      })
    })
  }

  useEffect(getExercise, [props.exerciseId])

  return (
    <div className="exerciseDetailsContainer">
      <picture>
        <img src={abs.url} />
      </picture>
      <h3>
        {abs.name}
      </h3>
      <div className="exerciseDetailsDescription">
        <p dangerouslySetInnerHTML={{
          __html:
            abs.description
        }}>
        </p>
      </div>
    </div >
  )
}
