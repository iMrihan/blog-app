const express = require("express");
const Review = require("../models/review.model");
const router = express.Router();
const Blog = require("../models/blog.model");

router.get("/test", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/create", async (req, res) => {
  let review = new Review(req.body);
  let result = await review.save();
  let { _id, blog_id } = review;

  let blog = await Blog.findById({ _id: blog_id });
  blog.reviews.push(_id);
  await blog.save();

  res.send(result);
});
router.delete("/:id", async (req, res) => {
  let result = await Review.deleteOne({ _id: req.params.id });
  res.send(result);
});
module.exports = router;
