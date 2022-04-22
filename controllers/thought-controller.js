// Import Thought models
const { Thought, User } = require("../models");

// Create model methods
const thoughtController = {
  // Get all Thoughts
  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((allThoughts) => res.json(allThoughts))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get one Thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((singleThought) => {
        if (!singleThought) {
          res.status(404).json({
            message: "The Thought you are looking for does not exist.",
          });
          return;
        }
        res.json(singleThought);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create a new Thought
  // Expects: { "thoughtText": "This is my first thought.", "username": "Test" }
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((singleUser) => {
        if (!singleUser) {
          res.status(404).json({ message: "There is no User for this id." });
        }
        res.json(singleUser);
      })
      .catch((err) => res.json(err));
  },

  // Create a new Reaction
  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true }
    )
      .then((singleThought) => {
        if (!singleThought) {
          res.status(404).json({
            message: "The Thought you are looking for does not exist.",
          });
          return;
        }
        res.json(singleThought);
      })
      .catch((err) => res.json(err));
  },

  // Update a Thought by id
  // Expects(example): { "thoughtText": "First thought!" }
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((updatedThought) => {
        if (!updatedThought) {
          res.status(404).json({
            message: "The Thought you are looking for does not exist.",
          });
          return;
        }
        res.json(updatedThought);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Remove a Thought by id
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          res.status(404).json({
            message: "The Thought you are looking for does not exist.",
          });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((singleUserData) => {
        if (!singleUserData) {
          res
            .status(404)
            .json({ message: "The User you are looking for does not exist." });
          return;
        }
        res.json(singleUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Remove a Reaction
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((singleThought) => res.json(singleThought))
      .catch((err) => res.json(err));
  },
};

// Export the controller
module.exports = thoughtController;
