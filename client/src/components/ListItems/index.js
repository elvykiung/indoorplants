// Feature
//  api call to database get data and present it ( 2 col, pics & detail_
// pics
// Sientific name
// Common Name
// icons on water need, light need and growth care need level

import React from "react";
//import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
    <ul className="list-group">
        {children}
    </ul>
);

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}

