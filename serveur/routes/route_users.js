const express = require("express");
const router = express.Router();


const UserCtrl= require("../controllers/controllers_users");
router.post("/login", UserCtrl.loginUser);
router.post("/signup", UserCtrl.signupUser);

module.exports = router;