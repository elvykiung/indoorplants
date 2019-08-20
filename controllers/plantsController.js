const db = require("../models/plant");
const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    db.find()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  findByName: function(req, res) {
    db.find({title:req.params.title})
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));

  },


  create: function(req, res) {
    const scientificName = req.body.scientificName;
    const commonName = req.body.commonName;
    const description = req.body.features;
    const image = req.body.imageName;
    const imageAlt = req.body.imageAlt;
    const title = req.body.token;

    db.findOneAndUpdate(
      { title: title },
      {
        scientificName,
        commonName,
        description,
        image,
        imageAlt,
        title
      },
      { new: true, upsert: true }
    )
      .then(() => res.json("Plant added!"))
      .catch(err => console.log(err));
  }


};
