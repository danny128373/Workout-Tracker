import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <>
      <Link to="register"><img id="createAccount" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592408647/Create_Account_and_Login_button_qsqin6.png" onClick={props.registerHandler} /></Link>
    </>
  )
}
