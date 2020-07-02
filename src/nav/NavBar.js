import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {

  return (
    <>
      <ul className="navbar fixed-bottom">
        <li><Link to="/newWorkout"><img style={props.workoutBackground} onClick={props.workoutHandler} id="navWorkout" className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500744/nav_bar_icons_100_x_100_5_exeztr.png" /></Link></li>
        <li><Link to="/workoutLogs"><img style={props.logsBackground} onClick={props.logsHandler} id="navLogs" className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500353/nav_bar_icons_100_x_100_kh7dzj.png" /></Link></li>
        <li><Link to="/muscle"><img style={props.exercisesBackground} onClick={props.exercisesHandler} id="navExercises" className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500544/nav_bar_icons_100_x_100_4_bmwltg.png" /></Link></li>
        <li><Link to="/profile"><img style={props.profileBackground} onClick={props.profileHandler} id="navProfile" className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500344/nav_bar_icons_100_x_100_3_ie9wcp.png" /></Link></li>
      </ul>
    </>
  )
}
export default withRouter(NavBar)
