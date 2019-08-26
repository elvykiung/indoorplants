import axios from "axios";

export default {
  // Gets plants from db category (discover)
  getPlants: function(category) {
    return axios.get("/api/plants/category/" + category);
  },

  // Gets plants from db by name (search)
  getPlantsbyName: function(name) {
    return axios.get("api/plants/" + name);
  },

  // Gets plant by id
  getPlantsbyID: function(id) {
    return axios.get("api/plants/id/" + id);
  },

  //these routes are not necessary for the MVP but we will use them later:

  // Gets all plants saved to user
  getMyPlants: function() {
    return axios.get("/api/plants");
  },
  // Deletes the saved plant with the given id
  deletePlant: function(id) {
    return axios.delete("/api/plants/" + id);
  },
  // Saves a plant to the user
  savePlant: function(plantData) {
    return axios.post("/api/plants", plantData);
  }
};

