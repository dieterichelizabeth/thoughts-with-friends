const router = require("express").Router();

// Import the User - Controller
const { getAllUser, createUser } = require("../../controllers/user-controller");

// Route: /api/users
router.route("/").get(getAllUser).post(createUser);

// Export routes
module.exports = router;
