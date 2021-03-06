import React from 'react'
import { Link } from 'react-router-dom'

export default function AbsCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img className="exerciseImages" alt="abs exercise" src={props.ab.exercise.url} />
          <h5><span>
            {props.ab.exercise.name}
          </span></h5>
          <Link to={`abs/${props.ab.exercise.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    </>
  )
}
