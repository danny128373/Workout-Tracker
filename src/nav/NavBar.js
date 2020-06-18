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
      <ul className="navbar fixed-bottom">
        <li><Link to="/newWorkout"><img className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500744/nav_bar_icons_100_x_100_5_exeztr.png" /></Link></li>
        <li><Link to="/workoutLogs"><img className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500353/nav_bar_icons_100_x_100_kh7dzj.png" /></Link></li>
        <li><Link to="/muscle"><img className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500544/nav_bar_icons_100_x_100_4_bmwltg.png" /></Link></li>
        <li><Link to="/profile"><img className="navLink" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592500344/nav_bar_icons_100_x_100_3_ie9wcp.png" /></Link></li>
      </ul>
    </>
  )
}
export default withRouter(NavBar)
