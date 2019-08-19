import React from "react";
import { ListItem } from "../ListItems";
import { Row, Col } from "../Grid";
import "./style.css";

function Plant({ scientificName, commonName, description, image, imageAlt }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h3 className="font-italic">{title}</h3>
                    {commonName && <h5 className="font-italic">{commonName}</h5>}
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p className="font-italic small">Scientific Name: {scientificName}</p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={imageAlt} />
                </Col>
                <Col size="12 sm-8 md-10">
                    <p>{description}</p>
                </Col>
            </Row>
        </ListItem>
    );
}

export default Plant;
