import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";


function LoginButton() {
    return (
        <Nav.Link as={Link} to="/">
            Sign In/Sign Up
          </Nav.Link>
    )
}

export default LoginButton;