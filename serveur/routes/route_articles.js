const express = require("express");
const router = express.Router();


const furnitureCtrl= require("../controllers/controllers_articles");
router.get("/articles", furnitureCtrl.getArticles);
router.post("/articles", furnitureCtrl.createArticles);

module.exports = router;