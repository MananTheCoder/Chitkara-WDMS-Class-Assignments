const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/BootStrap.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
