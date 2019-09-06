import React from "react";
import { TaggedContentCard } from "react-ui-cards";
import "../../pages/style.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function ToDoItems(props) {
  return (
    <div >
      <TaggedContentCard  href={"/myPlants/detail/" + props.id} thumbnail={props.image} title={props.commonName} description={props.scientificName} tags={["water", "light", "fertilizing"]} />
    </div>
  );
}
export default ToDoItems;
