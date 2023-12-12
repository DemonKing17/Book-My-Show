require("./utils/dbConnect"); //database connection
const express = require("express");
const postRouter = require("./routes/postRoute");
const userRouter = require("./routes/userRoute");
const app = express();

//Middleware
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
