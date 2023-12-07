const Universe = require("../models/universe.model");

const getUniverses = async (req, res) => {
  try {
    const allUniverses = await Universe.find().populate("books", "nameUniverse collection");
    return res.status(200).json(allUniverses);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postUniverses = async (req, res) => {
  try {
    const newUniverse = new Universe(req.body);
    const createdUniverse = await newUniverse.save();
    return res.status(201).json(createdUniverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteUniverses = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUniverse = await Universe.findByIdAndDelete(id);
    if (!deletedUniverse) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(deletedUniverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putUniverses = async (req, res) => {
  try {
    const { id } = req.params;
    const putUniverse = new Universe(req.body);
    putUniverse._id = id;

    const updatedUniverse = await Universe.findByIdAndUpdate(id, putUniverse, {
      new: true,
    });
    if (!updatedUniverse) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(updatedUniverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getUniverses, postUniverses, deleteUniverses, putUniverses };