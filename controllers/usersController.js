const db = require("../models/user");

module.exports = {
  findAll: function(req, res) {
    db.find()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const plants = req.body.plants;

    db.findOneAndUpdate(
      { userName: userName },
      {
        userName,
        email,
        password,
        plants
      },
      { new: true, upsert: true }
    )
      .then(() => res.json("user added!"))
      .catch(err => console.log(err));
  }
};
