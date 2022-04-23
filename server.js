// Mongoose and Express connection
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use(require("./routes"));

// Point Mongoose to the database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/thoughts-with-friends",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () =>
  console.log(`App listening on URL: http://localhost:${PORT}`)
);
