// database route goes here
const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");
const scrapePlants = require("../../controllers/scraper");

// Matches with "/api/plants
router
  .route("/plants")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/scrape
router
  .route("/scrape")
  .get(scrapePlants.getCostalFarmData)
  .post(scrapePlants.updateDetailController);

// Matches with "/api/plants/:title"
router.route("/plants/:title").get(plantsController.findByName);

//matches with "/api/plants/:category"
router.route("/plants/category/:category").get(plantsController.findByCategory);

router.route("/plants/id/:id").get(plantsController.findByID);
module.exports = router;

// // LoginHome matches with "/api" 
// router
//   .route("/")
//   .get(plantsController.findAll)
//   .post(plantsController.create);

//   //Login matches with "/api/login" 
// router
//   .route("/home/login")
//   .get(plantsController.findAll)
//   .post(plantsController.create);

//    //Signup matches with "/api/signup" 
// router
// .route("/home/signup")
// .get(plantsController.findAll)
// .post(plantsController.create);

