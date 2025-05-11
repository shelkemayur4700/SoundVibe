const express = require("express");
const { logIn, callback } = require("../controllers/authController");

const router = express.Router();
router.get("/login", logIn);
router.get("/callback", callback);

module.exports = router;
