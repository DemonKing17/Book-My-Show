const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require("express-session");
// const MongoStore = require("connect-mongo");
const getToken = require("./utils/getTokenFromHeader");
const verifyToken = require("./utils/verifyToken");
//const isLogin = require("./middleware/isLogin");
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

//generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, "anyKey", { expiresIn: "1h" });
};

//session
// app.use(
//   session({
//     secret: "jsdnskosnme993cjikc",
//     resave: true,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 },
//     store: new MongoStore({
//       mongoUrl:
//         "mongodb+srv://sundernadar12:n306ib6Askqetq95@mongod-bdemo.j8yzhai.mongodb.net/authentication?retryWrites=true&w=majority",
//       ttl: 24 * 60 * 60,
//     }),
//   })
// );

//token

//static files
app.use(express.static("public"));
//pass json data
app.use(express.json());
//pass form data
app.use(express.urlencoded({ extended: true }));
//isLogin

//session middleware
// const protect = (req, res, next) => {
//   if (!req.session.loginUser) {
//     return res.render("unAthor");
//   }
//   next();
// };
//routes
app.get("/", (req, res) => {
  res.render("index");
});

//protected get
app.get("/protected", (req, res) => {
  const user = true;
  res.render("protected", { user });
});

//login get
app.get("/login", (req, res) => {
  res.render("login");
});

//login post
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ username });
    if (!userFound) {
      return res.json({
        msg: "Invalid login cre",
      });
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      userFound.password
    );
    if (!isPasswordValid) {
      return res.json({
        msg: `Invalid login credentials`,
      });
    }
    res.json({
      status: "success",
      username: userFound.username,
      fullName: userFound.fullName,
      token: generateToken(userFound._id),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "An error occurred during login",
    });
  }
});

//Register get
app.get("/register", (req, res) => {
  res.render("register");
});

//Register post
app.post("/register", async (req, res) => {
  const { username, fullName, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const proPassword = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({
    username,
    fullName,
    password: proPassword,
  });
  res.redirect("/login");
});

//profile
app.get("/profile", async (req, res) => {
  const token = getToken(req);
  const decoded = verifyToken(token);
  const userDetails = await User.findById(decoded.id);
  res.json({
    msg: "welcome you have successFully logged in",
    status: "success",
    userDetails,
  });
});

//logout
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({ msg: `this is the ${err}` });
    }
  });
  res.redirect("/login");
});

//listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
