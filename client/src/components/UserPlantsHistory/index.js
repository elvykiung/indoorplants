import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Moment from "react-moment";

const styles1 = {
  margin: '0px',
  padding: '0px'
}

const styles2 = {
  marginBottom: "50%",
  marginTop: "5%"
}

export function UserPlantsHistory(props) {
  return (
    <Container style={styles2}>
      <Row>
        <Col className="col-md-12">
          {props.wateredData.map(function (listValue) {
            return (
              <ul className='mx-auto' style={styles1}>Water Date: <Moment format="MM-DD-YYYY" parse="YYYY-MM-DD">{listValue}</Moment></ul>
            )
          })}
        </Col>
      </Row>
    </ Container >
  );
}

export default UserPlantsHistory;
