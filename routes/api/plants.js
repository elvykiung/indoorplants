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
  .get(plantsController.scrapePlants)
  .post(scrapePlants.updateDetailController);

  // Matches with "/api/plants/:name"
router
.route("/plants/:title")
.get(plantsController.findByName)


module.exports = router;
