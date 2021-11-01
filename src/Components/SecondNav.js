import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap'
import img from '../Img/icon.ico'
function SecondNav() {
  return (
    <div>
      <Navbar className="main-nav" expand="lg">
        <Navbar.Brand href="#home">
          <img className="logo" src={img} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="temp">
            <Nav.Link className="navelements" href="#about">
              About
            </Nav.Link>

            <Nav.Link className="navelements" href="#levels">
              Skills
            </Nav.Link>
            <Nav.Link className="navelements" href="#project">
              Project
            </Nav.Link>
            <Nav.Link className="navelements" href="#contact">
              Contact
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default SecondNav
