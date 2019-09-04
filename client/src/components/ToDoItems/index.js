import React from "react";
// import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

function ToDoItems(props) {
  return (
    <Card as={Link} to={"/myPlants/detail/" + props.id} >
      <Card.Img src={props.image} style={{  width: "60%", height: "auto" }} alt={props.alt} />
      </Card>
  );
}

export default ToDoItems;
