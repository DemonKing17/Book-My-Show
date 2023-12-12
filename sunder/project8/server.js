const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
//connect to mongoose
mongoose
  .connect(
    "mongodb+srv://sundernadar12:n306ib6Askqetq95@mongod-bdemo.j8yzhai.mongodb.net/authentication?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));

const userSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  password: String,
});
//model

const User = mongoose.model("User", userSchema);
//view engine setup ejs
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));

//pass json data
app.use(express.json());

//pass form data
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//login get
app.get("/login", (req, res) => {
  res.render("login");
});

//login post
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userFound = await User.findOne({ username });
  if (!userFound) {
    return res.json({
      msg: "Invalid login credentials",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, userFound.password);
  if (!isPasswordValid) {
    return res.json({
      msg: "Invalid login credentials",
    });
  }
  res.redirect(`/profile/${userFound._id}`);
});

//Register get
app.get("/register", (req, res) => {
  res.render("register");
});

//Register post
app.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const proPassword = await bcrypt.hash(req.body.password, salt);
  await User.create({
    username: req.body.username,
    fullName: req.body.fullName,
    password: proPassword,
  });
  res.redirect("/login");
});

//profile
app.get("/profile/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("profile", { user });
});

//listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
