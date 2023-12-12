require("./utils/dbConnect"); //database connection
const express = require("express");
const authorRouter = require("./routes/authorRoute");
const bookRouter = require("./routes/bookRoute");
const app = express();

app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
