import React, { useEffect, useState } from 'react'
import ApiManager from '../../modules/ApiManager'

export default function ForearmsDetails(props) {
  const [forearms, setForearms] = useState({ name: "", description: "", url: "" })

  const getExercise = () => {
    ApiManager.get('exercises', props.exerciseId).then(forearms => {
      setForearms({
        name: forearms.name,
        description: forearms.description,
        url: forearms.url
      })
    })
  }

  useEffect(getExercise, [props.exerciseId])

  return (
    <div className="exerciseDetailsContainer">
      <picture>
        <img src={forearms.url} />
      </picture>
      <h3>
        {forearms.name}
      </h3>
      <div className="exerciseDetailsDescription">
        <p dangerouslySetInnerHTML={{
          __html:
            forearms.description
        }}>
        </p>
      </div>
    </div >
  )
}
