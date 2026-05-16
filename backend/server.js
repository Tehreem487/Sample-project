const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");



// CONFIG

dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);

connectDB();

const app = express();



// MIDDLEWARE

app.use(cors());

app.use(express.json());



// ROUTES

const authRoutes = require(
  "./routes/authRoutes"
);

app.use("/api/auth", authRoutes);



// HOME ROUTE

app.get("/", (req, res) => {
  res.send("Server Running");
});



const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});