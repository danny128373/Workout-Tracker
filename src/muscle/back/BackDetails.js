import React, { useEffect, useState } from 'react'
import ApiManager from '../../modules/ApiManager'

export default function BackDetails(props) {
  const [back, setBack] = useState({ name: "", description: "", url: "" })

  const getExercise = () => {
    ApiManager.get('exercises', props.exerciseId).then(back => {
      setBack({
        name: back.name,
        description: back.description,
        url: back.url
      })
    })
  }

  useEffect(getExercise, [props.exerciseId])

  return (
    <div className="exerciseDetailsContainer">
      <picture>
        <img src={back.url} />
      </picture>
      <h3>
        {back.name}
      </h3>
      <div className="exerciseDetailsDescription">
        <p dangerouslySetInnerHTML={{
          __html:
            back.description
        }}>
        </p>
      </div>
    </div >
  )
}
