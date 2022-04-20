const router = require("express").Router();

// Import the Thought - Controller
const {
  getAllThought,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// Route: /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// Route: /api/users/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Export routes
module.exports = router;
