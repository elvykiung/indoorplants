// database route goes here
const router = require("express").Router();
const plantCareController = require("../../controllers/plantCareController");

// Matches with "/api/myplants; gets user's plants
router
    .route("/myplants/:userid")
    .get(plantCareController.find);


// Matches with "/api/myplant/detail/:plantid"; gets plants for plant detail view
router
    .route("/myplant/detail/:plantid")
    .get(plantCareController.findByID);

//update the date the plant was last watered
router
    .route("/update/myplant")
    .post(plantCareController.findByIDAndUpdate);

//save plant
router
    .route("/save/myplant")
    .post(plantCareController.create);

//delete plant
router
    .route("delete/myplant" + plantid)
    .delete(plantCareController.delete);

module.exports = router;



