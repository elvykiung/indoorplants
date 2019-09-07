import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// This component exports both the List and ListItem components

function ListItems(props) {
  return (
    <Card border="primary" style={{ margin: "2%", padding: "20px 20px 20px 20px" }}>
      <Row>
        <Col xs="12" md="auto">
          <p style={{ fontWeight: "bold" }}>{props.commonName} </p>
          <h6 style={{ fontWeight: "bold" }}>(Scientific Name: {props.scientificName})</h6>
        </Col>
        <Col xs="12" md="auto">
          <Image align="left" src={props.images} style={{ borderRadius: "4px", border: "1px solid #ddd", padding: "5px", width: "30%", height: "auto" , marginRight:"10px"}} />
          <p> {props.description}</p>
        </Col>
        <Col xs lg="2">
          <Button style={{ fontSize: "20px" }}>
            <Link style={{ fontSize: "15px", textAlign: "center" }} className="text-white"
              to={{
                pathname: "/detail/" + props.id,
                state: { newPlant: true }
              }}>
              See details
            </Link>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default ListItems;
