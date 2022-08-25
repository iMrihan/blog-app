const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();

  result = result.toObject();
  delete result.password;

  res.send(result);
});

router.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");

    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
});

module.exports = router;
