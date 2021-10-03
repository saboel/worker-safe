"use strict";
const app = require("./app");

// Init App
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`LimitLess' Server Has Started on Port ${PORT}`)
);
