const router = require("express").Router();

// Import the User - Controller
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// Route: /api/users
router.route("/").get(getAllUser).post(createUser);

// Route: /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Export routes
module.exports = router;
