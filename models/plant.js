const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  scientificName: { type: String, required: true },
  commonName: { type: String, required: false },
  description: { type: String, required: true },
  image: { type: String, required: false },
  waterRequirement: { type: String, required: true },
  lightRequirement: { type: String, required: true }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
