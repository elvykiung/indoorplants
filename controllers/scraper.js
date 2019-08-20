const cheerio = require("cheerio");
const axios = require("axios");
const db = require("../models/plant");

function updateDetail(urlTittle) {
  return axios.get("http://www.costafarms.com/plants/" + urlTittle).then(function(response) {
    const $ = cheerio.load(response.data);

    let fullDescription = $("div.p-format")
      .first()
      .find("p")
      .html()
      .trim()
      .split("<strong>")[0];

    fullDescription = cheerio
      .load(fullDescription)
      .text()
      .trim();

    const growInstructions = $("div.p-format")
      .eq(1)
      .find("p")
      .text()
      .trim();

    const lightReq = $("section.features")
      .find("li p ")
      .eq(0)
      .html()
      .split("<br>");

    const colorsOfPlants = $("section.features")
      .find("li p")
      .eq(1)
      .text()
      .split(",");

    const waterReq = $("section.features")
      .find("li p")
      .eq(2)
      .text()
      .split(",");

    const specialFeatures = $("section.features")
      .find("li p")
      .eq(3)
      .text()
      .match(/([A-Z]?[^A-Z]*)/g)
      .slice(0, -1);

    db.findOneAndUpdate(
      { title: urlTittle },
      {
        fullDescription: fullDescription,
        growInstructions: growInstructions,
        lightReq: lightReq,
        waterReq: waterReq,
        colorsOfPlants: colorsOfPlants,
        specialFeatures: specialFeatures
      },
      { new: true }
    )
      .then(() => console.log("added"))
      .catch(err => console.log(err));
  });
}

module.exports = {
  updateDetailController: function(req, res) {
    db.find()
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          updateDetail(data[i].title);
        }
      })
      .then(() => res.json("Plant added!"))
      .catch(err => res.json(err));
  }
};
