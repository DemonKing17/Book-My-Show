const http = require("http");
const fs = require("fs");
const { log } = require("console");
const path = require("path");
// const server = http.createServer(function (req, res) {
//   console.log("someone has visited");
//   res header
//   res.writeHead(200,{"content-type":"text/plain"});
//   //send data to the user
//   res.write("hello, this is my first web server");
//   //end the response
//   res.end();
// });

server.listen(7000, () => {
  console.log("server is up and running");
});

//http://localhost:7000

fs.writeFile(
  "login.html",
  `
<div>
<h1>This is Login Page</h1>
<p>Please provide your valid details.</p>
</div>`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file has been created");
    }
  }
);

server.on("request", (req, res) => {
  const url = req.url;
  console.log(req.method);
  if (url === "/login") {
    fs.readFile("login.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  if (url === "/") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  if (url === "/create-post" && req.method === "POST") {
    //recive the incoming data.
    const post = [];
    req
      .on("data", (chunk) => {
        post.push(chunk);
      })
      .on("end", () => {
        const paredData = Buffer.concat(post).toString();
        res.writeHead(200, { "content-type": "text/json" });
        console.log(paredData);
        res.write("post is created");
        res.end();
      });
  }
});
fs.writeFile("public/css/style.css", `h1{color:red;}`, (err) => {
  if (err) console.log(err);
  else console.log("FOlder has been created");
});

const server = http.createServer();

server.listen(7000, console.log("server is up and running"));

server.on("request", (req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    fs.readFile("public/pages/home.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  if (url === "/about") {
    const filePath = path.join(__dirname, "public/pages", "about.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});
