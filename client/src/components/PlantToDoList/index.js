import React from "react";
import Container from "react-bootstrap/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import "./style.css";

export function UserToDo(props) {
  const styleObj = {
    fontSize: "15px"
  };
  return (
    <Container style={{ marginBottom: "30%" }}>
      <h2 className="mt-2">Todo List</h2>
      <Row>
        <Col className="mx-2">
          <p className="mt-2">Water</p>
        </Col>
        <Col>
          <DatePicker selected={props.startDate} onChange={props.onChange} className="mt-2" />
          {/* <p>{this.state.startDate}</p> */}
        </Col>
        <Col>
          <Button variant="outline-primary" onClick={props.onClick} style={styleObj}>
            Complete
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserToDo;
