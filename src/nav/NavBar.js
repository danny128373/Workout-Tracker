import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

  return (
    <>
      <header>
        <h1 className="site-title">
          Workout Tracker
          <br />
          <small>Does it really count if you don't log it?</small>
        </h1>
      </header>
      <nav>
        <ul className="container">
          <li><Link to="/newWorkout" className="nav-link">New Workout</Link></li>
          <li><Link to="/exercises" className="nav-link">Discover Exercises</Link></li>
          <li><Link to="/workoutLog" className="nav-link">Workout Logs</Link></li>
          <li><Link to="/profile" className="nav-link">Profile</Link></li>
          <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>
    </>
  )
}
