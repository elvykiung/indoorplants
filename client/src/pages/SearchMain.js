//  Feature
//   Search Input box component
//   Search result component show only when user as done search
//   list card component
//   sticky bottom navbar
import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import API from "../utils/API";
import ListItems from "../components/ListItems";



class SearchMain extends Component {
  state = {
    title: "",
    ifResults: false,
    results: [],
    plants: [],
    target: "",

  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {

      const title = this.state.title.trim();

      API.getPlantsbyName(title)
        .then(res => {

          console.log(res.data);
          console.log("Plant name is:" + this.state.title);


          this.setState({
            ifResults: true,
            results: res.data
          });
        })
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
     <div className="container">
      <div>
        <SearchBar
            name="title"
            value={this.state.title}
            onChange = {this.handleInputChange}
            />
            <SearchButton
            onClick={this.handleFormSubmit}
            className="btn btn-info"
            >
            Search
            </SearchButton>
      </div>
      <div >
                <div className="col-10 col-centered card-content mb-4">
              {this.state.ifResults ?(
                <div>
                <h1 className="heading-title mx-sm-3 mb-2 text-center">Search Results</h1>

                  {this.state.results.map(plant => {
                    return <ListItems 
                           key={plant._id} 
                           images={"http://www.costafarms.com/CostaFarms/" + plant.image}
                           commonName={plant.commonName}
                           scientificName={plant.scientificName}
                           description={plant.fullDescription}
                           />

                  })}
                  
                </div>
                ) :(
                    <div>
                    </div>
                    

                )
                }

                </div>
                </div>

      </div>
    );
  }
}

export default SearchMain;
