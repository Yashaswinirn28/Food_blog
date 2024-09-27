const express = require("express");
const executeQuery = require("../config/db");
const router = express.Router();

router.get("/getAllPosts", async (req, res) => {
  const query = "SELECT * FROM posts";
  const result = await executeQuery(query);
  console.log(result);
  if (result.length > 0) {
    res.status(200).json(result);
  } else {
    console.log("fail to fetch");
    res.status(500).json(null);
  }
});
router.get("/getPost", async (req, res) => {
  const { PID } = req.query; // Use req.query instead of req.body for GET requests
  console.log(`Fetching post with PID: ${PID}`);
  const query = "SELECT * FROM posts WHERE PID = ?";
  const result = await executeQuery(query, [PID]);
  console.log(result);
  if (result.length > 0) {
    res.status(200).json(result);
  } else {
    console.log("fail to fetch");
    res.status(500).json(null);
  }
});

router.post("/addPost", async (req, res) => {
  const query = "INSERT INTO posts SET ?";
  const {UID, Title, Subtitle, PostBody, ImgUrl, Rating } = req.body;
  const data = {
    UID:UID,
    Title: Title,
    Subtitle: Subtitle,
    Body: PostBody,
    ImgUrl: ImgUrl,
    Rating: Rating,
  };

  const result = await executeQuery(query, data);
  console.log(result);
  if (result.affectedRows > 0) {
    console.log("post added!");
    
    res.status(200).json({ mesage: "post added successfully!" });
  } else {
    console.log("fail to fetch");
    res.status(500).json(null);
  }
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    Email: email,
    Password: password,
  };

  const query = "INSERT INTO users SET ?";
  const result = await executeQuery(query, data);
  console.log(result);
  if (result.affectedRows > 0) {
    res.status(200).json({ mesage: "user added successfully!" });
  } else {
    console.log("fail to fetch");
    res.status(500).json(null);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE Email=? AND Password=?";

  try {
    const result = await executeQuery(query, [email, password]);
    console.log(result);
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      console.log("fail to fetch");
      res.status(500).json(null);
    }
  } catch (err) {
    res.status(500).json({ message: "Error logging in" });
  }
});
module.exports = router;
