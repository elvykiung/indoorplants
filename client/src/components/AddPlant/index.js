import React from "react";
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";

const addPlantData = (data) => {
    API.saveMyPlant({
        plant: data
    })
        .then(res => {
            console.log(res);
            this.props.history.push("/myPlants");
        })
        .catch(err => console.log(err));
};

function AddPlant(props) {
    return (
        <Button variant="primary" size="lg" className="mx-auto d-block" onClick={() => addPlantData(props.plant)}>
            Add Plant
              </Button>
    )
}

export default AddPlant;