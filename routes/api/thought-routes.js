const router = require("express").Router();

// Import the Thought - Controller
const {
  getAllThought,
  createThought,
} = require("../../controllers/thought-controller");

// Set up Routes
// Route: /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// Export routes
module.exports = router;
