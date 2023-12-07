const express = require("express");
const {getBooks, postBooks,deleteBooks,putBook} = require("../controllers/book.controller");

const booksRouter = express.Router();


booksRouter.get("/",getBooks)
booksRouter.post("/",postBooks)
booksRouter.delete("/:id",deleteBooks)
booksRouter.put("/:id",putBook)
module.exports = booksRouter;