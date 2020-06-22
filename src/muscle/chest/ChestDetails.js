import React, { useEffect, useState } from 'react'
import ApiManager from '../../modules/ApiManager'


export default function ChestDetails(props) {
  const [chest, setChest] = useState({ name: "", description: "", url: "" })

  const getExercise = () => {
    ApiManager.get('exercises', props.exerciseId).then(chest => {
      setChest({
        name: chest.name,
        description: chest.description,
        url: chest.url
      })
    })
  }

  useEffect(getExercise, [props.exerciseId])

  return (
    <div className="exerciseDetailsContainer">
      <picture>
        <img src={chest.url} />
      </picture>
      <h3>
        {chest.name}
      </h3>
      <div className="exerciseDetailsDescription">
        <p dangerouslySetInnerHTML={{
          __html:
            chest.description
        }}>
        </p>
      </div>
    </div >
  )
}
