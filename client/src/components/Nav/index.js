// Sticky bottom navbar
//  Set route to each page "/myPlants", "/search", "/discover"
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
// import Navbar from "react-bootstrap/Navbar";
import './style.css';

function StickyBottom() {
  return (
    <div className="fixed-bottom">
      <Nav className="navbar justify-content-center font-weight-bold">
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

export default StickyBottom;
