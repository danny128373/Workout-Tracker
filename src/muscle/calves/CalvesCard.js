import React from 'react'

export default function CalvesCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img className="exerciseImages" src={props.exercise.exercise.url} />
          <h5><span>
            {props.exercise.exercise.name}
          </span></h5>
          {/* <Link to={`/abs/${props.ab.id}`}>
            <button>Details</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}
