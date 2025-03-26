const express = require("express");
const router = express.Router();
const {userLogin,userSignUp,getUser} = require('../controller/userController')


router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/user/:userid", getUser);

module.exports = router;
