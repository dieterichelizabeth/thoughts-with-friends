const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`App listening on URL: http://localhost:${PORT}`)
);
