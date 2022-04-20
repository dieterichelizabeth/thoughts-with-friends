const router = require("express").Router();

// Import Routes
const apiRoutes = require("./api");

// Set Routes
router.use("/api", apiRoutes);

// No route has handled the request
router.use((req, res) => {
  res.status(404).end();
});

// Export Routes
module.exports = router;
