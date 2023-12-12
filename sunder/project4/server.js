const express = require("express");
const app = express();

//serve static files from the public;
app.use(express.static("public"));
//configure express to pass data from a from
app.use(express.urlencoded({ extended: true }));

//home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/index.html");
});

//about page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/pages/about.html");
});

app.get("/addpost", (req, res) => {
  res.sendFile(__dirname + "/public/pages/addPost.html");
});

app.post("/addpost", (req, res) => {
  res.send(req.body);
});

app.listen(7000, console.log("server is running"));
