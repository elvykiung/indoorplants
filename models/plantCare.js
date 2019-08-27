var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var plantCareSchema = new Schema({

    plants: [
        {// Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the plant model
            ref: "plant"
        }
    ],

    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "user"

        }
    ],

    lastWateredDate: {
        type: date
    }


});

// This creates our model from the above schema, using mongoose's model method
var plantCare = mongoose.model("plantCare", plantCareSchema);

// Export the User model
module.exports = plantCare;
