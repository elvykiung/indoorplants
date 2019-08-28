import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
// import Button from "react-bootstrap/Button";

class UserPlantsHistory extends Component {
  state = {};
  render() {
    return (
      <Container style={{ marginBottom: '50%' }}>
        <h2>History</h2>
        <ListGroup>
          <ListGroup.Item className="mx-2">Water</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}

export default UserPlantsHistory;
