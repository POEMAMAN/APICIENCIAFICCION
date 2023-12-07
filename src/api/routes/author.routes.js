const {isAuthenticated} = require('../middleware/auth.middleware');
const express = require("express");
const {getAuthors,postAuthors,deleteAuthors,putAuthors} = require("../controllers/author.controller")
const authorsRouter = express.Router();

authorsRouter.get("/",[isAuthenticated],getAuthors)
authorsRouter.post("/",[isAuthenticated],postAuthors)
authorsRouter.delete("/",[isAuthenticated],deleteAuthors)
authorsRouter.put("/",[isAuthenticated],putAuthors)



module.exports = authorsRouter;