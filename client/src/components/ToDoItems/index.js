import React from "react";
// import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

function ToDoItems(props) {
  return (
    <Card style={{ marginBottom: "15px", width: "120%" }} as={Link} to={"/myPlants/detail/" + props.id}>
      <Card.Img src={props.image} style={{ width: "40%", height: "auto", marginBottom: "10px", marginTop: "10px", marginLeft: "10px" }} alt={props.alt} />
    </Card>
  );
}

export default ToDoItems;
