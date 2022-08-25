const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/create-blog", async (req, res) => {
  let blog = new Blog(req.body);
  let result = await blog.save();
  res.send(result);
});

router.get("/blogs", async (req, res) => {
  let blogs = await Blog.find().populate("reviews");
  if (blogs.length > 0) {
    res.send(blogs);
  } else {
    res.send({ result: "No Blog found" });
  }
});

router.delete("/blog/:id", async (req, res) => {
  let result = await Blog.deleteOne({ _id: req.params.id });
  res.send(result);
});

router.get("/blog/:id", async (req, res) => {
  let result = await Blog.findOne({ _id: req.params.id }).populate("reviews");

  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No record found" });
  }
});

router.put("/blog/:id", async (req, res) => {
  let result = await Blog.updateOne({ _id: req.params.id }, { $set: req.body });
  res.send(result);
});

module.exports = router;
