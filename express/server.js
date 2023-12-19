const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.get("/", (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at  ${port}`);
});
