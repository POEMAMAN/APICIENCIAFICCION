const express = require("express");
const {getAuthors,postAuthors,deleteAuthors,putAuthors} = require("../controllers/author.controller")
const authorsRouter = express.Router();

authorsRouter.get("/",getAuthors)
authorsRouter.post("/",postAuthors)
authorsRouter.delete("/",deleteAuthors)
authorsRouter.put("/",putAuthors)



module.exports = authorsRouter;