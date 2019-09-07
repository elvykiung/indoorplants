// Sticky bottom navbar if mobile size
//  Set route to each page "/myPlants", "/search", "/discover"
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./style.css";

function StickyBottom() {
  const isMobile = useMediaQuery({ query: "(max-width: 426px)"  });

  return (
    <div className={isMobile ? "fixed-bottom" : "fixed-top"}>
    
      <Nav className="navbar justify-content-center font-weight-bold">
      <Nav.Item className="home">
          <Nav.Link  as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="link">
          <Nav.Link as={Link} to="/myPlants">
            My Plants
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="search">
          <Nav.Link  as={Link} to="/search">
            Search
          </Nav.Link>
        </Nav.Item>

        <Nav.Item >
          <Nav.Link as={Link} to="/discovery">
            Discovery
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default StickyBottom;
