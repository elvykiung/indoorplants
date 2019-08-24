import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

class MyPlantsDetail extends Component {
  state = {};
  render() {
    return (
      <Container className="text-center">
        <Jumbotron>
          <h1>Plat Name</h1>
        </Jumbotron>

        <Image src="https://houseraccoon.com/wp-content/uploads/2019/05/Monstera-Deliciosa-Albo-Variegata.jpg" rounded />

        <Nav justify variant="tabs" defaultActiveKey="/todo">
          <Nav.Item>
            <Nav.Link href="/todo">To Do</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/history">History</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* href={"/plants/" + props.title} */}
            <Nav.Link href="/plants/">Plant Info</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    );
  }
}

export default MyPlantsDetail;
