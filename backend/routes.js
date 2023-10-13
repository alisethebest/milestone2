const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const SECRET_KEY =
  "9770aa23205ad9f187a8b10a7a8ee2534364a915ad0b7a74331cddbe0995fec7d34488f6ea657b9b227b62e36125d604267fb9c18a57ddb78da8379db95b71e1";

// Mock data (replace with real database queries later)
const mockRecipes = [
  { title: "Chicken Soup", description: "Description 1" },
  { title: "Pasta", description: "Description 2" },
];

// GET all recipes
router.get("/api/recipes", (req, res) => {
  const { query } = req.query;
  const filteredRecipes = mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query ? query.toLowerCase() : "")
  );
  res.json(filteredRecipes);
});

// POST new recipe (for example)
router.post("/api/recipes", (req, res) => {
  const { title, description } = req.body;
  mockRecipes.push({ title, description });
  res.status(201).json({ message: "Recipe added" });
});

// POST signup
router.post("/auth/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const { username } = req.body;
    // Simulating database operation
    // Add user to database
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
    // Simulating database operation
    // Fetch user from database
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
