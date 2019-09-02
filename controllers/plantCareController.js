const db = require("../models/plantCare");
const dbUser = require("../models/user")
const dbPlant = require("../models/plant")
const axios = require("axios");

module.exports = {
    //display all plants associated with the given user
    //testing notes - working, except for the populate part 
    find: function (req, res) {
        const user = req.body.userid;
        // const user = '5d6c4caaa690e74728dec99e'
        db.find({ user: user })
            .populate("Plant")
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //find by id will display individual plant data for the detail page
    //testing notes: works except for populate
    findByID: function (req, res) {
        // const plantCareID = '5d6894b509b2112328a5970b';
        const plantCareID = req.body.plantid;
        db.find({ _id: plantCareID })
            .populate("dbPlant.plant")
            .sort({ date: -1 })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //this updates the last watered date
    findByIdAndUpdate: function (req, res) {
        const waterDate = req.body.date;
        const plantCareID = req.body.id;
        // const waterDate = '2019-08-02';
        // const plantCareID = '5d6c52fc69418e359ca86d62';
        db.findByIdAndUpdate(
            { _id: plantCareID },
            { $push: { wateredDates: waterDate } },
            { new: true }
        )
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //the create query creates a "plantCare" object & associates it with the user
    create: function (req, res) {
        const plant = req.body.plantID;
        const user = req.body.userID;
        // testing notes: route & db call working
        // const plant = "5d5b5fa71660e82850bb28e9";
        // const user = "5d67598b1c9d440000a8a3c2";
        db.create(
            {
                plant: plant,
                user: user
            }
        )
            .then(function (res) {
                // If a plantCare document was created successfully, push that plantCare object's ID
                // to the corresponding User record.
                return dbUser.findByIDAndUpdate({ _id: res.user }, { $push: { userPlants: res._id } }, { new: true });
            })
            .then(function (dbUser) {
                // If the user was updated successfully, send it back to the client
                res.json(dbUser);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });

    },

    delete: function (req, res) {
        const plantCareID = req.body.plantCareID;
        //testing notes - route & db call working
        // const plantCareID = '5d68968ba46db31a50ae2da8';
        db.remove({ _id: plantCareID })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }

};
