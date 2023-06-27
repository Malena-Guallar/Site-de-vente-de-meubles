const express = require("express");
const router = express.Router();


const furnitureCtrl= require("../controllers/controllers_articles");
router.get("/articles", furnitureCtrl.getAll);
router.post("/articles", furnitureCtrl.create);

module.exports = router;