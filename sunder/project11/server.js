const express = require("express");
const multer = require("multer");
const app = express();

//veiw engine
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));

const upload = multer({
  dest: "public/images",
});
//GET /
app.get("/", (req, res) => {
  res.render("home");
});

//GET/ upload
app.get("/upload", (req, res) => {
  res.render("upload");
});
//POST /upload
app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);
  res.json("file uploaded successfully");
});

//GET /images
app.get("/images", async (req, res) => {
  //read all files in the uploads folder
  res.render("images");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
