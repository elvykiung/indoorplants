const db = require("../models/plant");
const axios = require("axios");

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
          );
        }
      })
      .then(() => res.json("Plant added!"))
      .catch(err => res.json(err));
  }
};
