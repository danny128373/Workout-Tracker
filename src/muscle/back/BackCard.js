import React from 'react'

export default function BackCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>Name: <span>
            {props.back.exercise.name}
          </span></h3>
          <img src={props.back.exercise.url} />
          {/* <Link to={`/back/${props.ab.id}`}>
            <button>Details</button>
          </Link> */}
        </div>
      </div>
    </>
  )
}
