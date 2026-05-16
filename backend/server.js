const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// CONFIG
dotenv.config();

connectDB();

const app = express();

// MIDDLEWARE
app.use(
  cors({
    origin: "https://myproject-five-chi-17.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ROUTES
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Server Running");
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});