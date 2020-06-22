import React from 'react'
import { Link } from 'react-router-dom'

export default function ChestCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img className="exerciseImages" alt="chest exercise" src={props.exercise.exercise.url} />
          <h3> <span>
            {props.exercise.exercise.name}
          </span></h3>
          <Link to={`chest/${props.exercise.exercise.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    </>
  )
}
