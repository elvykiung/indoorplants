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
import ListGroup from "react-bootstrap/ListGroup";



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
                <ListItems>
                    {this.state.results.map((plant)=>(
                        <ListGroup.Item key={plant._id}>
                            <div className="order-div">
                                <h3>{plant.scientificName} (Sientific Name)</h3>
                                <h3>{plant.commonName} (Common Name)</h3>
                                <p>{plant.waterReq} (Water Requirements)</p>
                                <p>{plant.lightReq} (Water Requirements)</p>
                                <p>{plant.specialFeatures} (Special Features)</p>
                                <p>
                                <img align="left" style={{paddingRight:10}}
                                    src={plant.image} alt={plant.imageAlt}
                                />
                                    {plant.fullDescription}
                                </p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListItems>
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
