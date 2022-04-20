// Import Mongoose
const { Schema, model } = require("mongoose");

// Create the User Schema
const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
});

// Define the User Model
const User = model("User", UserSchema);

// Export Model
module.exports = User;
