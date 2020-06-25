import React from 'react'
import { Link } from 'react-router-dom'

export default function CalvesCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img className="exerciseImages" src={props.exercise.exercise.url} />
          <h5><span>
            {props.exercise.exercise.name}
          </span></h5>
          <Link>
            <button>Details</button>
          </Link>
        </div>
      </div>
    </>
  )
}
