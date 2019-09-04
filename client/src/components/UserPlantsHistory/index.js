import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function UserPlantsHistory(props) {
  return (
    <Container style={{ marginBottom: "50%" }}>
      <h2>History</h2>
      <Row>
        <Col className="mx-2">
          <p>Water</p>
        </Col>
        <Col>
          <p>Last Water Data: {props.wateredData}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPlantsHistory;
