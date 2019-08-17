const db = require("../models/plant");
const axios = require("axios");
// var cheerio = require("cheerio");
// const dotenv = require("dotenv");
// dotenv.config();

module.exports = {
  findAll: function(req, res) {
    db.find()
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

    const newPlant = new db({
      scientificName,
      commonName,
      description,
      image,
      imageAlt,
      title
    });

    newPlant.save().then(() => res.json("Plant added!"));
  },

  scrapePlants: function(req, res) {
    axios
      .get("http://www.costafarms.com/api/plantlibrary")
      .then(function(data) {
        for (let i = 0; i < data.data.items.length; i++) {
          const element = data.data.items[i];

          const scientificName = element.scientificName;
          const commonName = element.commonName;
          const description = element.features;
          const image = element.imageName;
          const imageAlt = element.imageAlt;
          const title = element.token;

          const newPlant = new db({
            scientificName,
            commonName,
            description,
            image,
            imageAlt,
            title
          });

          newPlant.save();
        }
      })
      .then(() => res.json("Plant added!"))
      .catch(err => res.json(err));
  }
};
