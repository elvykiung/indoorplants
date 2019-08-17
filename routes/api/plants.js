// database route goes here
const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/plants
router
  .route("/plants")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/scrape
// router.route("/scrape").get(plantsController.scrapePlants);

module.exports = router;
