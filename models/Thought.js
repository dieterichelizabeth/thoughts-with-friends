// Import Mongoose
const { Schema, model } = require("mongoose");

// Create the Thought Schema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Define the Thought Model
const Thought = model("Thought", ThoughtSchema);

// Export Model
module.exports = Thought;
