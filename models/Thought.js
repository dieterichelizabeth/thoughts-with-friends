const { Schema, model, Types } = require("mongoose");

const ReactionSchema = new Schema(
  {
    // Default value is set to a new ObjectId
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

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
    reactions: [ReactionSchema],
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

module.exports = Thought;
