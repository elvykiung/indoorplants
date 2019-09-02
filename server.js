//dependency
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require('./passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
dotenv.config();

// modules

const routes = require("./routes");
// authentication route requires 
const user = require('./routes/api/user')

//set Express connection
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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


mongoose.set('useFindAndModify', false);

// Sessions
app.use(
	session({
		secret: 'secret', 
		store: new MongoStore({ mongooseConnection: connection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)


// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes for user
app.use('/api/user', user)

// Define API routes here
app.use(routes);

// Server listen

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
