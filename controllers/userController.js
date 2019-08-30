const db = require("../models/user");
const passport = require("passport");

module.exports = {
  findAll: function(req, res) {
    db.find()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const email = req.body.email;
    const isDeleted = req.body.isDeleted;
    const signUpDate = req.body.signUpDate;
    const userPlants = req.body.userPlants;

    db.findOneAndUpdate(
      { email: email },
      {
        userName,
        firstName,
        lastName,
        password,
        email,
        isDeleted,
        signUpDate,
        userPlants
      },
      { new: true, upsert: true }
    )
      .then(() => res.json("Plant added!"))
      .catch(err => console.log(err));
  },

  login: (req, res, next) => {
    // request come from react destructors req.body.user use on check email and password

    const {
      body: { user }
    } = req;

    if (!user.email) {
      return res.status(422).json({
        errors: {
          email: "is required"
        }
      });
    }

    if (!user.password) {
      return res.status(422).json({
        errors: {
          password: "is required"
        }
      });
    }

    // using passport authentication method call local strategy to authentic
    return passport.authenticate("local", { session: false }, (err, passportUser, info) => {
      if (err) {
        return next(err);
      }
      // the .then from passport.js return the user object from jwt
      //if the login is true, return the json of the object and the token
      if (passportUser) {
        const user = passportUser;
        // user.token = passportUser.generateJWT();
        user.password = null;
        //using the generateJWT method from user models
        return res.json({ user: user, token: passportUser.generateJWT() });
      }

      return res.status(400).json(info);
    })(req, res, next);
  },

  currentUser: function(req, res, next) {
    //store the req.payload.id
    const {
      payload: { id }
    } = req;

    return db.findById(id).then(user => {
      if (!user) {
        return res.sendStatus(400);
      }
      user.password = null;
      return res.json({ user: user });
    });
  }
};
