// Import Mongoose
const { Schema, model } = require("mongoose");

// Create the Though Schema
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  username: {
    type: String,
  },
});

// Define the Thought Model
const Thought = model("Thought", ThoughtSchema);

// Export Model
module.exports = Thought;
