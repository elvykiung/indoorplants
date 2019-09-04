import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class UserToDo extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <Container style={{ marginBottom: "50%" }}>
        <h2>Todo List</h2>
        <Row>
          <Col className="mx-2">
            <p>Water</p>
          </Col>
          <Col>
            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
            {/* <p>{this.state.startDate}</p> */}
          </Col>
          <Col>
            <Button>Complete</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserToDo;
