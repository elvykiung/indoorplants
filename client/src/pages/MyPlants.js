import React, { Component } from "react";

class MyPlants extends Component {
  state = {};

  //testing plantCare routes & queries

  createPlant = () => {
    API.saveMyPlant(plantData)
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));
  };

  //  let plantData = { userid: 1234, plantid: 5678 };




  render() {
    return (
      <div>
        <p>This is My plants Page</p>
      </div>
    );
  }
}

export default MyPlants;
