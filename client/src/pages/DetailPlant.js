// Feature
//   Sticky top with scientific plant name
//   Pic (data from database)
//   Care Detail (data from database)
//   ( Later feature) Add Plant button to insert data to user collation database
//   Sticky bottom navbar
import React, { Component } from "react";
import Plant from "../components/Plant";
import Nav from "../components/Nav/";
import API from "../utils/API";

class PlantDetails extends Component {
    state = {
        PlantDetails: []
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
                        <Card title="Plants" icon="download">
                                        <Plant
                                            key={plant._id}
                                            commonName={plant.commonName}
                                            scientificName={plant.scientificName}
                                            image={plant.image}
                                            description={plant.description}
                                        />
                        </Card>
                    </Col>
                </Row>
                <Nav />
            </Container>
        );
    }
}

export default PlantDeatails;
