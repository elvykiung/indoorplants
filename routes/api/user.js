// database route goes here
const router = require("express").Router();
const userController = require("../../controllers/usersController");

// Matches with "/apiUser/user
router
  .route("/user")
  .get(userController.findAll)
  .post(userController.create);

module.exports = router;
