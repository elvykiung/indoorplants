import axios from "axios";

export default {
  // Gets plants from db category (discover)
  getPlants: function(category) {
    return axios.get("/api/plants/category/" + category);
  },

  // Gets plants from db by name (search)
  getPlantsbyName: function(name) {
    return axios.get("/api/plants/" + name);
  },

  // Gets plant by id
  getPlantsbyID: function(id) {
    return axios.get("/api/plants/id/" + id);
  },

  //these routes are not necessary for the MVP but we will use them later:

  // Gets all plants saved to user
  getMyPlants: function() {
    return axios.get("/api/myplants/");
  },
  // Gets plant for detail page
  getMyPlantDetail: function(plantId) {
    return axios.get("/api/myplant/detail/" + plantId);
  },
  //updates the watered date
  updateMyPlant: function(waterData) {
    return axios.post("/api/update/myplant/", waterData);
  },
  // Deletes the saved plant with the given id
  deleteMyPlant: function() {
    return axios.delete("/api/delete/myplant/");
  },
  // Saves a plant to the user
  saveMyPlant: function(savedPlantIdData) {
    return axios.post("/api/save/myplant/", savedPlantIdData);
  }
};
