import React from "react";
import { Link } from "react-router-dom";
import { TaggedContentCard } from "react-ui-cards";
import "./styles.css";
import Row from "react-bootstrap/Row";

function ToDoItems(props) {
  return (
    <div>
      <Row className="card-container">
      <Link to={"/myPlants/detail/" + props.id}>
        <TaggedContentCard  thumbnail={props.image} title={props.commonName} description={props.scientificName} tags={["water", "light", "fertilizing"]} />
      </Link>
      </Row>
    </div>
  );
}
export default ToDoItems;
