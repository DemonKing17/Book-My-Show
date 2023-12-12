const mongoose = require("mongoose");

module.exports = mongoose
  .connect(
    "mongodb+srv://sundernadar12:n306ib6Askqetq95@mongod-bdemo.j8yzhai.mongodb.net/blog-app1?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db is connected"))
  .catch((err) => console.log(err));
