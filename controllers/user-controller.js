// Import User models
const { User } = require("../models");

// Create model methods
const userController = {
  // get all Users
  getAllUser(req, res) {
    User.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((allUserData) => res.json(allUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create a new user
  createUser({ body }, res) {
    User.create(body)
      .then((singleUserData) => res.json(singleUserData))
      .catch((err) => res.status(400).json(err));
  },

  // update a user by its _id
  // remove a user by its _id
};

// Export the controller
module.exports = userController;
