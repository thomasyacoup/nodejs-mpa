const express = require("express");
const path = require("path");
const app = express();

app.get("/:page", (req, res) => {
  const fileName = path.join(__dirname, "views", req.params.page + ".html");

  res.sendFile(fileName, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    }
  });
});

app.listen(8080, () => console.log("started"));
