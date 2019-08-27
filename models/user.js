const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserPlantsSchema = new Schema({
  plantsName: String,
  lastWaterTime: [Date]
});

const UserSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  plants: [UserPlantsSchema]
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
