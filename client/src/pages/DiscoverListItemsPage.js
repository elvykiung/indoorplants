// Feature
//   map logic to pass data from database
//   sticky top component get the title name from discover main
//   list item component
//   Sticky bottom navbar component

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Plant from "../components/Plant";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/ListItems";

class Plants extends Component {
    state = {
        plants: []
    };

    componentDidMount() {
        this.getPlants();
    }

    getPlants = () => {
        API.getPlants()
            .then(res =>
                this.setState({
                    plants: res.data
                })
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Indoor Plants</strong>
                            </h1>
                            <h2 className="text-center">Discover new plants!</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Plants" icon="download">
                            {this.state.plants.length ? (
                                <List>
                                    {this.state.plants.map(plant => (
                                        <Plant
                                            key={plant._id}
                                            commonName={plant.commonName}
                                            scientificName={plant.scientificName}
                                            image={plant.image}
                                            description={plant.description}
                                        />
                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center">No Plants Match Your Criteria</h2>
                                )}
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Plants;

