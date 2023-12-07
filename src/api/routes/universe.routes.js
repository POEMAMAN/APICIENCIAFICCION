const express = require("express");
const {getUniverses,postUniverses,deleteUniverses,putUniverses} = require("../controllers/universe.controller")
const universeRouter = express.Router();

universeRouter.get("/",getUniverses)
universeRouter.post("/",postUniverses)
universeRouter.delete("/",deleteUniverses)
universeRouter.put("/",putUniverses)



module.exports = universeRouter;