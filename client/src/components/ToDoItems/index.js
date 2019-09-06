import React from "react";
import { TaggedContentCard } from "react-ui-cards";



function ToDoItems(props) {
  return (
    <div>
      
        <TaggedContentCard href={"/myPlants/detail/" + props.id} thumbnail={props.image} title={props.commonName} description={props.scientificName} tags={["water", "light", "fertilizing"]} />
     
    </div>
  );
}
export default ToDoItems;
