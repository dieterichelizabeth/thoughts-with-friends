const router = require("express").Router();

// Import the User - Controller
const { getAllUser } = require("../../controllers/user-controller");

// Set up Routes
// Route: /api/users
router.route("/").get(getAllUser);

// Export routes
module.exports = router;
