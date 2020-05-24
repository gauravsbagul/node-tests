/** @format */

const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found.",
    name: "Todo App v1.0",
  });
});

app.get("/user", (req, res) => {
  res.status(200).send([
    { name: "a", age: 25 },
    { name: "b", age: 27 },
    { name: "c", age: 20 },
  ]);
});

app.listen(3000);

module.exports.app = app;
