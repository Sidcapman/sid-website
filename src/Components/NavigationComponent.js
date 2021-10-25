import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavElements'
import img from '../Img/logo192.png'

function NavigationComponent() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={img} style={{ height: '50px', width: '50px' }} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/achievements" activeStyle>
            Acheivements
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavigationComponent
