import React from 'react'

export default function MuscleCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3 className="exerciseName"><span>
            {props.exercise.exercise.name}
          </span></h3>
          <img className="exerciseImages" alt="calves exercise" src={props.exercise.exercise.url} />
          {/* <Link to={`/abs/${props.ab.id}`}>
            <button>Details</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}
