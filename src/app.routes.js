const {Router} = require("express");
const {authRoutes} = require("./module/auth/auth.routes");

const mainRoutes = Router();
mainRoutes.use("/auth", authRoutes)

module.exports = mainRoutes;