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

module.exports = { getBooks, postBooks, deleteBooks, putBook };
