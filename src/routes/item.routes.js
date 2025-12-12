const itemController = require("../controllers/item.controller");

// This mimics the structure of household.routes.js, but for a pure Node.js server
module.exports = (router) => {
  router["POST /items/create"] = itemController.createItem;
  router["GET /items/get"] = itemController.getItems;
};
