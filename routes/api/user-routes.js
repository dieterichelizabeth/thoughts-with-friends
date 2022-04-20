const router = require("express").Router();

// Import the User - Controller
const {
  getAllUser,
  createUser,
  getUserById,
} = require("../../controllers/user-controller");

// Route: /api/users
router.route("/").get(getAllUser).post(createUser);

// Route: /api/users/:id
router.route("/:id").get(getUserById);

// Export routes
module.exports = router;
