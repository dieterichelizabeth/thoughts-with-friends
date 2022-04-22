const router = require("express").Router();

const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// Set Routes
router.use("/users", userRoutes); // http://localhost:3001/api/users
router.use("/thoughts", thoughtRoutes); // http://localhost:3001/api/thoughts

module.exports = router;
