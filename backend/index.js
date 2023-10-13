const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // Assuming your routes file is named routes.js
const { Pool } = require("pg");

const app = express();
const port = 3001;

const pool = new Pool({
  user: "alisecervantes",
  host: "localhost",
  database: "recipes",
  password: "YourPasswordHere",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err.stack));

app.use((req, res, next) => {
  req.pool = pool;
  next();
});

app.use(cors());
app.use(express.json());
app.use("/api", routes); // Make sure this line matches your routes file

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
