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

module.exports = router;
