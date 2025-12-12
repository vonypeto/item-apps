const itemController = require("../controllers/item.controller");

module.exports = (router) => {
  router["POST /items/create"] = itemController.createItem;
  router["GET /items/get"] = itemController.getItems;
  router["POST /items/clear"] = itemController.clearItems;
};
