// Feature
//   Sticky top with scientific plant name
//   Pic (data from database)
//   Care Detail (data from database)
//   ( Later feature) Add Plant button to insert data to user collation database
//   Sticky bottom navbar
import React, { Component } from "react";
import API from "../utils/API";

class DetailPlant extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    API.getPlantsbyName(this.props.match.params.plantName)
      .then(res => {
        console.log(res.data);

        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      //this is test data can be deleted
      <div>
        <p>This is detail page</p>
        <h2>{this.props.match.params.plantName}</h2>
      </div>
    );
  }
}

export default DetailPlant;
