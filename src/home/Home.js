import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { Button } from 'reactstrap'

export default function Home(props) {
  return (
    <div className="homeContainer">
      <p className="banner">Welcome</p>
      <img id="logoHome" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592494323/App_icon_864_x_864_sn65yw.png" />
      <p>How many reps? Always one more.</p>
      <Link to="register"><Button id="createAccount" onClick={props.registerHandler}>Create Account</Button></Link>
      <p className="alreadyMember">Already a member?</p>
      <Link to="login"><Button id="signInHome" onClick={props.loginHandler}>Sign In</Button></Link>
    </div>
  )
}
