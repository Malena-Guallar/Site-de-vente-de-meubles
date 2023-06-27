const express = require("express");
const router = express.Router();


const furnitureCtrl= require("../controllers/test");
router.get("/", furnitureCtrl.getAll);
router.post("/", furnitureCtrl.create);

module.exports = router;