const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  scientificName: { type: String, required: true },
  commonName: { type: String, required: false },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: false },
  title: { type: String, required: true },
  fullDescription: { type: String, required: false },
  growInstructions: { type: String, required: false },
  lightReq: { type: [String], required: false },
  waterReq: { type: [String], required: false },
  colorsOfPlants: { type: [String], required: false },
  specialFeatures: { type: [String], required: false }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
