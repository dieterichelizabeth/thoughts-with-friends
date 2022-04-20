// Import User models
const { User } = require("../models");

// Create model methods
const userController = {
  // Get all Users
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((allUsers) => res.json(allUsers))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get one User by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((singleUser) => {
        if (!singleUser) {
          res
            .status(404)
            .json({ message: "The User you are looking for does not exist." });
          return;
        }
        res.json(singleUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create new User
  // Expects: { "username": "Test", "email": "test@gmail.com" }
  createUser({ body }, res) {
    User.create(body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(400).json(err));
  },

  // Update one User by id
  // Expects(example): { "email": "test@hotmail.com" }
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((updatedUser) => {
        if (!updatedUser) {
          res
            .status(404)
            .json({ message: "The User you are looking for does not exist." });
          return;
        }
        res.json(updatedUser);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Remove one User by id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((deletedUser) => {
        if (!deletedUser) {
          res
            .status(404)
            .json({ message: "The User you are looking for does not exist." });
          return;
        }
        res.json(deletedUser);
      })
      .catch((err) => res.status(400).json(err));
  },
};

// Export the controller
module.exports = userController;
