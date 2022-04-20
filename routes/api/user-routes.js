const router = require("express").Router();

// Import the User - Controller
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
} = require("../../controllers/user-controller");

// Route: /api/users
router.route("/").get(getAllUser).post(createUser);

// Route: /api/users/:id
router.route("/:id").get(getUserById).put(updateUser);

// Export routes
module.exports = router;
