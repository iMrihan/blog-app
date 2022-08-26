const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();

const connectDB = require("./configs/db");

const userController = require("./controllers/user.controller");

const blogController = require("./controllers/blog.controller");
const reviewController = require("./controllers/review.controller");

app.use("/api/users", userController);
app.use("/api", blogController);
app.use("/api/reviews", reviewController);

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "bad request",
  });
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, async (req, res) => {
  try {
    await connectDB();
    console.log(`🚀 @ http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
