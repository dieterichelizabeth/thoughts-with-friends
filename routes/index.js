const router = require("express").Router();
const apiRoutes = require("./api");

// Set Routes
router.use("/api", apiRoutes); // http://localhost:3001/api

// No route has handled the request
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
