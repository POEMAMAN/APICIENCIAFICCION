const Collection = require("../models/collection.model");

const getCollections = async (req, res) => {
  try {
    const allCollections = await Collection.find().populate("books", "nameCollection books");
    return res.status(200).json(allCollections);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postCollections = async (req, res) => {
  try {
    const newCollection = new Collection(req.body);
    const createdCollection = await newCollection.save();
    return res.status(201).json(createdCollection);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteCollections = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCollection = await Collection.findByIdAndDelete(id);
    if (!deletedCollection) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(deletedCollection);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCollections = async (req, res) => {
  try {
    const { id } = req.params;
    const putCollection = new Collection(req.body);
    putCollection._id = id;

    const updatedCollection = await Collection.findByIdAndUpdate(id, putCollection, {
      new: true,
    });
    if (!updatedCollection) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(updatedCollection);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getCollections, postCollections, deleteCollections, putCollections };
