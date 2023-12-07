const {isAuthenticated} = require('../middleware/auth.middleware');
const express = require("express");
const {getBooks, postBooks,deleteBooks,putBook} = require("../controllers/book.controller");

const booksRouter = express.Router();


booksRouter.get("/",{isAuthenticated},getBooks)
booksRouter.post("/",{isAuthenticated},postBooks)
booksRouter.post("/",{isAuthenticated}, [fileMiddlewares.upload.single('picture'), fileMiddlewares.uploadToCloudinary], postBooks)
booksRouter.delete("/:id",{isAuthenticated},deleteBooks)
booksRouter.put("/:id",{isAuthenticated},putBook)


module.exports = booksRouter;