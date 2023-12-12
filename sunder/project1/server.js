const express = require("express");
const morgan = require("morgan");
const app = express();

//create middleware
//plugin the app to middleware
// app.use((req, res, next) => {
//   console.log("middleware is a success...");
//   next();
// });

// chaining middleware
// app
//   .use((req, res, next) => {
//     console.log("first middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("second middleware");
//     next();
//   })
//   .use((req, res, next) => {
//     console.log("third middleware");
//     next();
//   });

//protected route middleware
// const protected = (req, res, next) => {
//   let userLoginDetails = {
//     isLogin: false,
//     username: "sunder",
//   };
//   if (userLoginDetails.isLogin) {
//     next();
//   } else {
//     return res.json("You Must login first");
//   }
// };

// //isAdmin
// const isAdmin = (req, res, next) => {
//   let userLoginDetails = {
//     isLogin: false,
//     username: "suner",
//     isAdmin: true,
//   };
//   if (userLoginDetails.isAdmin) {
//     next();
//   } else {
//     return res.json("You are not Admin");
//   }
// };

//-------coding challenge----------
// create a middleware that will log the request method , url, and the date and time of the request

// const logger = (req, res, next) => {
//   console.log(req.method);
//   console.log(req.url);
//   console.log(new Date().toISOString());
//   next();
// };

// if a user makes more than 10 request throw error
let requestCountVal = 0;
const requestCount = (req, res, next) => {
  requestCountVal++;
  if (requestCountVal > 10) {
    return res.status(429).json("Too many request");
  }
  next();
};
app.use(requestCount);
//third party middleware

//home route
app.get("/", (req, res) => {
  res.send("hello world!");
});

//login route
app.post("/login", (req, res) => {
  res.send("login successfull...");
});

//@role : authenticated user
//create post request
app.post("/create-post", (req, res) => {
  res.json({
    message: "post Created",
  });
});

//@role : public user
//fetch all post
app.get("/posts", (req, res) => {
  res.json({
    message: "post fetched",
  });
});

//@role : admin
//delete post
app.delete("/posts/:id", (req, res) => {
  res.json({
    message: "post deleted",
  });
});

app.listen(7000, console.log("Server Is Running"));
