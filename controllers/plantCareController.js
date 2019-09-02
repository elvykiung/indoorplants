const db = require("../models/plantCare");
const dbUser = require("../models/user");
const axios = require("axios");

module.exports = {
  //display all plants associated with the given user
  find: function(req, res) {
    user = req.params.userid;
    db.plantCare
      .find({ user: user })
      .populate("plant")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  //find by id will display individual plant data for the detail page
  findByID: function(req, res) {
    db.plantCare
      .find({ _id: req.params.id })
      .populate("plant")
      .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  //this updates the last watered date
  findByIDAndUpdate: function(req, res) {
    waterDate = req.body.date;
    db.plantCare
      .findByIDAndUpdate({ _id: req.body.id }, { $push: { wateredDates: waterDate } }, { new: true })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  //the create query creates a "plantCare" object & associates it with the user
  create: function(req, res) {
    const plant = req.body.plantID;
    const user = req.body.userID;
    db.plantCare
      .create({
        plant: plant,
        user: user
      })
      .then(function(res) {
        // If a plantCare document was created successfully, push that plantCare object's ID
        // to the corresponding User record.
        return dbUser.User.findByIDAndUpdate({ user: res.user }, { $push: { plant: dbplantCare._id } }, { new: true });
      })
      .then(function(dbUser) {
        // If the user was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  },

  delete: function(req, res) {
    db.plantCare
      .remove({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }

  // delete: function(req, res) {
  //   db.plantCare
  //     .remove({ _id: req.params.id })
  //     .then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));
  // }
};
