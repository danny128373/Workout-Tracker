import React from 'react'

export default function BackCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img className="exerciseImages" src={props.back.exercise.url} />
          <h5><span>
            {props.back.exercise.name}
          </span></h5>
          {/* <Link to={`/back/${props.ab.id}`}>
            <button>Details</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}
