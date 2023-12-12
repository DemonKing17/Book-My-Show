const express = require("express");
const Author = require("../models/Author");
const authorRouter = express.Router();

authorRouter.post("/", async (req, res) => {
  try {
    const authors = await Author.create({
      authorName: req.body.authorName,
      city: req.body.city,
    });
    res.json(authors);
  } catch (error) {
    res.json({ message: error });
  }
});

authorRouter.get("/", async (req, res) => {
  try {
    const authors = await Author.find().populate("books");
    res.json(authors);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = authorRouter;
