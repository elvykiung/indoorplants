const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/plants");
const userApiRoute = require("./api/user");

// API Routes
router.use("/api", apiRoutes);
// Add uer api route
router.use("/userApi", userApiRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
