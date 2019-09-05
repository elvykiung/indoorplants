import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { TaggedContentCard } from "react-ui-cards";
import styles from "./styles.css";

function ToDoItems(props) {
  return (
    <Card style={{ marginBottom: "15px", width: "auto" }} as={Link} to={"/myPlants/detail/" + props.id}>
      <div className={styles["card-container"]}>
        <TaggedContentCard thumbnail={props.image} title={props.commonName} description={props.scientificName} tags={["water", "light", "fertilizing"]} />
      </div>
    </Card>
  );
}

export default ToDoItems;
