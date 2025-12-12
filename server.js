const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const itemController = require("./src/controllers/item.controller");
app.post("/items/create", itemController.createItem);
app.get("/items/get", itemController.getItems);
app.post("/items/clear", itemController.clearItems);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
