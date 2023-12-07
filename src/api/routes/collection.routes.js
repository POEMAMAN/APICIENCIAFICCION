const {isAuthenticated} = require('../middleware/auth.middleware');
const express = require("express");
const {getCollections,postCollections,deleteCollections,putCollections} = require("../controllers/collection.controller")
const CollectionsRouter = express.Router();

CollectionsRouter.get("/",{isAuthenticated},getCollections)
CollectionsRouter.post("/",{isAuthenticated},postCollections)
CollectionsRouter.delete("/",{isAuthenticated},deleteCollections)
CollectionsRouter.put("/",{isAuthenticated},putCollections)



module.exports = CollectionsRouter;