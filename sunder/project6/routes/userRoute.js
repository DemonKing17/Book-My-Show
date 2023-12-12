const express = require("express");
const User = require("../models/User");
const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  try {
    const users = await User.create({
      fullName: req.body.fullName,
      country: req.body.country,
    });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = userRouter;
