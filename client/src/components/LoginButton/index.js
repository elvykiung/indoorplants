import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavContainer from "../NavContainer";

const renderNavContainer = () => {
    return <NavContainer />;
};



function LoginButton() {
    return (
        <Nav.Link as={Link} to="/" onClick={renderNavContainer()}>
            Sign In/Sign Up
          </Nav.Link>
    )
}

export default LoginButton;