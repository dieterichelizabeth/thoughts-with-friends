// Import Thought models
const { Thought } = require("../models");

// Create model methods
const thoughtController = {
  // Get all Thoughts
  getAllThought(req, res) {
    Thought.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((allThoughtData) => res.json(allThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create a new Thought
  // Expects: { "thoughtText": "This is my first thought.", "username": "Test" }
  createThought({ body }, res) {
    Thought.create(body)
      .then((singleThoughtData) => res.json(singleThoughtData))
      .catch((err) => res.status(400).json(err));
  },

  // update a thought by its _id
  // remove a thought by its _id
};

// Export the controller
module.exports = thoughtController;
