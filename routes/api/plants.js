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
router
  .route("/plants/:title")
  .get(plantsController.findByName)

//matches with "/api/plants/:category"
router
  .route("/plants/category/:category")
  .get(plantsController.findByCategory)

  //matches with "/api/plants/:id"
router
.route("/plants/id:id")
.get(plantsController.findByID)

module.exports = router;
