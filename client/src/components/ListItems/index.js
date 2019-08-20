// Feature
//  api call to database get data and present it ( 2 col, pics & detail_
// pics
// Sientific name
// Common Name
// icons on water need, light need and growth care need level

import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


// This component exports both the List and ListItem components

function ListItems(props){
    return(
      <ListGroup>
          <ListGroup.Item>{props.children}</ListGroup.Item>
      </ListGroup>

    )
}

export default ListItems;
