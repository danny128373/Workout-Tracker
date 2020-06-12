import React from 'react'

export default function CardioCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>Name: <span>
            {props.exercise.exercise.name}
          </span></h3>
          <img alt="cardio exercise" src={props.exercise.exercise.url} />
          {/* <Link to={`/abs/${props.ab.id}`}>
            <button>Details</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}
