import React from 'react'

export default function AbsCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>Name: <span>
            {props.ab.exercise.name}
          </span></h3>
          <img src={props.ab.exercise.url} />
          {/* <Link to={`/abs/${props.ab.id}`}>
            <button>Details</button>
          </Link> */}
          <button type="button" onClick={() => props.deleteAbs(props.ab.id)}>Remove</button>
        </div>
      </div>
    </>
  )
}
