//dependency
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require('./passport');

dotenv.config();

// modules

const routes = require("./routes");
// Route requires
const user = require('./routes/api/user')


//set Express connection
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo Atlas DB
const uri = process.env.ATLAS_URI;
console.log(uri);

mongoose.connect(uri || "mongodb://localhost/IndoorPlants", { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Define API routes here
app.use(routes);

// Routes
app.use('/user', user)


// Server listen

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
