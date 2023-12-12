const express = require("express");
const { createFile, createFolder } = require("./utils");
const app = express();
const fs = require("fs");

app.use(express.json());
const postData = require("./data/post.json");

createFile("data/post.json", "content here");

//home route
app.get("/", (req, res) => {
  res.json(postData);
});

//Requesting all posts
app.get("/posts", (req, res) => {
  res.json(postData);
});

//single post
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  //find post by id
  const postFound = postData.find((post) => {
    return post.id === id;
  });
  if (!postFound) {
    res.json({ message: "post not found" });
  } else {
    res.json(postFound);
  }
});

//create post
app.post("/posts", (req, res) => {
  const newPost = req.body;
  postData.push({
    ...newPost,
    id: postData.length.toString(),
  });
  //write to the json file
  fs.writeFile("data/post.json", JSON.stringify(postData), function (err) {
    if (err) {
      console.log(err);
    } else {
      res.json({
        message: "post sent successfully",
      });
    }
  });
});

//delete post
app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;

  const filteredPosts = postData.filter((post) => {
    return post.id !== id;
  });
  //deleting in the file
  fs.writeFile("data/post.json", JSON.stringify(filteredPosts), function (err) {
    if (err) {
      console.log(err);
    } else {
      res.json({
        message: "post deleted successfully",
      });
    }
  });
});

//update post
app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const { title, url, description } = req.body;
  //finding the post to update
  const foundPost = postData.find((post) => {
    return post.id === id;
  });
  if (!foundPost) return res.json({ msg: "post not found" });
  //filter out the post
  const filteredPosts = postData.filter((post) => post.id !== id);
  //update the found post
  foundPost.title = title;
  foundPost.description = description;
  foundPost.url = url;
  //push the updated post in the filtered post array
  filteredPosts.unshift(foundPost);
  //write on the updated file
  fs.writeFile("data/post.json", JSON.stringify(filteredPosts), function (err) {
    if (err) {
      console.log(err);
    } else {
      res.json({
        message: "post updated successfully",
      });
    }
  });
});

//create a server
app.listen(9000, console.log("server is running"));
