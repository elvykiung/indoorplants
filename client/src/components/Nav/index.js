// Sticky bottom navbar
//  Set route to each page "/myPlants", "/search", "/discover"
import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
// import Navbar from "react-bootstrap/Navbar";
import './style.css';
import axios from 'axios';


class StickyBottom extends Component {

    constructor() {
      super()
      this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
  }

    render(){
      const loggedIn = this.props.loggedIn;
      console.log('navbar render, props: ')
      console.log(this.props);

    return (
      <div className="fixed-bottom">
        <Nav className="navbar justify-content-center font-weight-bold">
          {loggedIn ? (
            <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={this.logout}>
              Logout
            </Nav.Link>
          </Nav.Item>

          ):(
          <Nav>
            <Nav.Item>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav.Item>

          </Nav>
          )}

          <Nav.Item>
            <Nav.Link as={Link} to="/myPlants">
              My Plants
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/discovery">
              Discovery
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default StickyBottom;
