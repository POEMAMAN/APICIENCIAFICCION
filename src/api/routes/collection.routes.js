const express = require("express");
const {getCollections,postCollections,deleteCollections,putCollections} = require("../controllers/collection.controller")
const CollectionsRouter = express.Router();

CollectionsRouter.get("/",getCollections)
CollectionsRouter.post("/",postCollections)
CollectionsRouter.delete("/",deleteCollections)
CollectionsRouter.put("/",putCollections)



module.exports = CollectionsRouter;