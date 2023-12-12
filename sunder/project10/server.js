require("./utils/dbconnect");
const express = require("express");
const router = require("./routes/router");
const app = express();

app.use(express.json());
//post employee
app.use("/employees", router);

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
