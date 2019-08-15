const db = require("../models/plant");

module.exports = {
  findAll: function(req, res) {
    db.find()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const scientificName = req.body.scientificName;
    const commonName = req.body.commonName;
    const description = req.body.description;
    const image = req.body.image;
    const waterRequirement = req.body.waterRequirement;
    const lightRequirement = req.body.lightRequirement;

    const newPlant = new db({
      scientificName,
      commonName,
      description,
      image,
      waterRequirement,
      lightRequirement
    });

    newPlant
      .save()
      .then(() => res.json("Plant added!"))
      .catch(err => res.status(400).json("Error: " + err));
  }
};
