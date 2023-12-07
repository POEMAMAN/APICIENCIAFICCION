const {isAuthenticated} = require('../middleware/auth.middleware');
const express = require("express");
const {getUniverses,postUniverses,deleteUniverses,putUniverses} = require("../controllers/universe.controller")
const universeRouter = express.Router();

universeRouter.get("/",[isAuthenticated],getUniverses)
universeRouter.post("/",[isAuthenticated],postUniverses)
universeRouter.delete("/",[isAuthenticated],deleteUniverses)
universeRouter.put("/",[isAuthenticated],putUniverses)



module.exports = universeRouter;