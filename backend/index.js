const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes"); // Make sure to have your routes.js file
const { Pool } = require("pg"); // PostgreSQL client

const app = express();
const port = process.env.PORT || 3001;

// Database setup (change these values)
const pool = new Pool({
  user: "your-username",
  host: "localhost",
  database: "your-database",
  password: "your-password",
  port: 5432,
});

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Make the pool accessible to routes
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

// Use your routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
