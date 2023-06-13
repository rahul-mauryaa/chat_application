const express = require('express');

const userController = require('./../controller/userController');

const router = express.Router();


router
.post("/register",userController.registerUser)
.post("/login",userController.authUser)


exports.router = router;