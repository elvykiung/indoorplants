const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Users = mongoose.model("User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]"
    },
    (email, password, done) => {
      Users.findOne({ email })

        // pass the .then user when password is valid to user controller
        .then(user => {
          if (!user || user.password !== password) {
            return done(null, false, { errors: { "email or password": "is invalid" } });
          }

          return done(null, user);
        })
        .catch(done);
    }
  )
);
