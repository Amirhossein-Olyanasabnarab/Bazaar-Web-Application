const router = require("express").Router();
const authController = require("./auth.controller");
router.post("/sed-otp", authController.sendOtp);

module.exports = {
    authRoutes: router
}