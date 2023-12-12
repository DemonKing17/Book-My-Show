const express = require("express");
const Book = require("../models/Book");
const Author = require("../models/Author");
const bookRouter = express.Router();

bookRouter.post("/", async (req, res) => {
  try {
    const savedBooks = await Book.create({
      bookName: req.body.bookName,
      Language: req.body.Language,
      author: req.body.author,
    });
    const authorFound = await Author.findById(req.body.author);
    authorFound.books.push(savedBooks._id);
    await authorFound.save();
    res.json(savedBooks);
  } catch (error) {
    res.json({ message: error });
  }
});

bookRouter.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = bookRouter;
