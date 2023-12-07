const Book = require("../models/book.model");

const getBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postBooks = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const createdBook = await newBook.save();
    return res.status(201).json(createdBook);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "book'id not exist" });
    }
    return res.status(200).json(deletedBook);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putBook = async (req, res) => {
  try {
    const { id } = req.params;
    const putBook = new Book(req.body);
    putBook._id = id;

    const updatedBook = await Book.findByIdAndUpdate(id, putBook, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "book'id not exist" });
    }
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const fs = require("fs");

const imageToUri = require("image-to-uri");

const createCoverBook = async (req, res, next) => {
  try {
    bookCover = req.file.path ? req.file.path : null; 
    const newBook = new Book();
    newBook.title = req.body.title;
    newBook.publication_year = req.body.publication_year;
    newBook.collection = req.body.collection;
    newBook.collection_index = req.body.collection_index;
    newBook.universe = req.body. universe;
    newBook.author = req.body.author;
    newBook.cover = imageToUri(bookCover); //Y lo seteamos en cover.
    const bookDb = await newBook.save();
    await fs.unlinkSync(musicCover);
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { book: bookDb.name },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getBooks, postBooks, deleteBooks, putBook, createCoverBook };
