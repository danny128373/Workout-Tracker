import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

const NavBar = (props) => {

  return (
    <>
      <header>
        <h1 className="site-title">
          Workout Tracker
          <br />
        </h1>
        <h6 className="site-title">Does it really count if you don't log it?</h6>
      </header>
      <Navbar className="navbar">
        <NavItem><Link to="/newWorkout" className="NavLink">New <br />Workout</Link></NavItem>
        <NavItem><Link to="/muscle" className="NavLink">Discover<br /> Exercises</Link></NavItem>
        <NavItem><Link to="/workoutLogs" className="NavLink">Workout<br /> Logs</Link></NavItem>
        <NavItem><Link to="/profile" className="NavLink">Profile</Link></NavItem>
      </Navbar>
    </>
  )
}
//navbar navbar-expand-lg navbar-light bg-dark
export default withRouter(NavBar)
