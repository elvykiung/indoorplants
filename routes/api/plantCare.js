// database route goes here
const router = require("express").Router();
const plantCareController = require("../../controllers/plantCareController");

// Matches with "/api/myplants; gets user's plants
router.route("/myplants/").get(plantCareController.find);

// Matches with "/api/myplant/detail/"; gets plants for plant detail view
router.route("/myplant/detail/:plantId").get(plantCareController.findByID);

//update the date the plant was last watered
router.route("/update/myplant/").post(plantCareController.findByIdAndUpdate);

//update next water date
router.route("/updateNextWater/myplant/").post(plantCareController.findByIdUpdateNextWater);

//save plant
router.route("/save/myplant/").post(plantCareController.create);

//delete plant
router.route("/delete/myplant/:plantId").delete(plantCareController.delete);

module.exports = router;
