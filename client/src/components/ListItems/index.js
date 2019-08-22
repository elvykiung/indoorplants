// Feature
//  api call to database get data and present it ( 2 col, pics & detail_
// pics
// Sientific name
// Common Name
// icons on water need, light need and growth care need level

import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// This component exports both the List and ListItem components

function ListItems(props) {
  return (
    <div style={{ margin: "2%" }}>
      <Row>
        <Col xs="12" lg="3">
          <Image src={props.images} rounded />
        </Col>
        <Col xs="10" md="auto">
          <h4>Title {props.commonName}</h4>
          <p>Title {props.scientificName}</p>
          <p>Title {props.description}</p>
        </Col>
        <Col xs lg="2">
          <Button variant="outline-primary">See detail</Button>
        </Col>
      </Row>
    </div>
  );
}

export default ListItems;
