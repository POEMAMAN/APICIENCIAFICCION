const Author = require("../models/author.model");

const getAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.find().populate("books", "title publication_year collection universe");
    return res.status(200).json(allAuthors);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postAuthors = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    const createdAuthor = await newAuthor.save();
    return res.status(201).json(createdAuthor);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteAuthors = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(deletedAuthor);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putAuthors = async (req, res) => {
  try {
    const { id } = req.params;
    const putAuthor = new Author(req.body);
    putAuthor._id = id;

    const updatedAuthor = await Author.findByIdAndUpdate(id, putAuthor, {
      new: true,
    });
    if (!updatedAuthor) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getAuthors, postAuthors, deleteAuthors, putAuthors };