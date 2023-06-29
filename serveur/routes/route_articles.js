const express = require("express");
const router = express.Router();


const furnitureCtrl= require("../controllers/controllers_articles");
router.get("/articles", furnitureCtrl.getArticles);
router.post("/articles", furnitureCtrl.createArticles);
router.patch("/articles/update/:_id", furnitureCtrl.updateArticles)
router.delete("/articles/delete/:_id", furnitureCtrl.deleteArticles)

module.exports = router;