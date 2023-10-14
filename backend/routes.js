const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const SECRET_KEY = "your-secret-key-here"; // Replace with your actual secret key

// GET all recipes
router.get("/api/recipes", async (req, res) => {
  try {
    const searchQuery = req.query.q || "";
    const client = await req.pool.connect();
    const result = await client.query(
      `SELECT * FROM recipes WHERE LOWER(title) LIKE LOWER('%${searchQuery}%') OR LOWER(description) LIKE LOWER('%${searchQuery}%')`
    );
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST new recipe
router.post("/api/recipes", async (req, res) => {
  try {
    const { title, description } = req.body;
    const client = await req.pool.connect();
    const result = await client.query(
      "INSERT INTO recipes(title, description) VALUES($1, $2) RETURNING *",
      [title, description]
    );
    res.status(201).json(result.rows[0]);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST signup
router.post("/auth/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Simulate database operation to add the user
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// POST login
router.post("/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Simulate database operation to fetch the user
    const user = { username, password: await bcrypt.hash(password, 10) };

    if (!user) {
      return res.status(400).send("User not found");
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: user.username }, SECRET_KEY);
      return res.status(200).json({ token });
    } else {
      return res.status(400).send("Wrong password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
