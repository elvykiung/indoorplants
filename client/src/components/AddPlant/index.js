import React from "react";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import { withRouter } from "react-router-dom";

const addPlantData = props => {
  API.saveMyPlant({
    plant: props.plant
  })
    .then(res => {
      console.log(res);
      props.history.push("/myPlants");
    })
    .catch(err => console.log(err));
};

function AddPlant(props) {
  return (
    <Button style={{ backgroundColor: "transparent", width: "15%", fontSize: "20px" }} variant="primary" size="lg" className="mx-auto d-block" onClick={() => addPlantData(props)}>
      Add Plant
    </Button>
  );
}

export default withRouter(AddPlant);
