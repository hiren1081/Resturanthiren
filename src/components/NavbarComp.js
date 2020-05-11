import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash, faHome, faList, faSearch, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
              {
                localStorage.getItem('login')?
                <Nav.Link href="#home"><Link to="/logout"><FontAwesomeIcon icon={faUser} />LogOut</Link></Nav.Link>
                :
                <Nav.Link href="#home"><Link to="/login"><FontAwesomeIcon icon={faUser} />LogIn</Link></Nav.Link>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
