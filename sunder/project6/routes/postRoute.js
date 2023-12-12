const express = require("express");
const Post = require("../models/Post");
const User = require("../models/User");
const postRouter = express.Router();

postRouter.post("/", async (req, res) => {
  try {
    const author = await User.findById(req.body.author);
    const savedPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });

    author.Posts.push(savedPost.id);
    await author.save();
    res.json(savedPost);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});

postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = postRouter;
