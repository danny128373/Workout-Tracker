import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(props) {
  return (
    <div className="homeContainer">
      <Link to="register"><img id="createAccount" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592408647/Create_Account_and_Login_button_qsqin6.png" onClick={props.registerHandler} /></Link>
      <Link to="login"><img id="homeSignIn" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592409847/SIGN_IN_bsw0ix.png" onClick={props.loginHandler} /></Link>
    </div>
  )
}
