const router = require("express").Router();

// Import Routes
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// Set Routes
router.use("/users", userRoutes); // http://localhost:3001/api/users
router.use("/thoughts", thoughtRoutes); // http://localhost:3001/api/thoughts

// Export Routes
module.exports = router;
