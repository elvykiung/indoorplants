var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var plantCareSchema = new Schema({
  plant: {
    // store plant id
    type: Schema.Types.ObjectId,
    ref: "plant"
  },

  user: {
    //store user id
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  // store watered dates as an array
  wateredDates: [
    {
      type: Date
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var plantCare = mongoose.model("plantCare", plantCareSchema);

// Export the User model
module.exports = plantCare;
