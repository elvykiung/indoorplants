import React from "react";
import { Link } from "react-router-dom";
import { TaggedContentCard } from "react-ui-cards";
import styles from "./styles.css";

function ToDoItems(props) {
  return (
    <div className={styles["card-container"]}>
      <Link to={"/myPlants/detail/" + props.id}>
        <TaggedContentCard thumbnail={props.image} title={props.commonName} description={props.scientificName} tags={["water", "light", "fertilizing"]} />
      </Link>
    </div>
  );
}

export default ToDoItems;
