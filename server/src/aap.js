const express = require("express");
const cors = require("cors");
const skillRoutes = require("./routes/skillRoutes")
const projectRoutes = require("./routes/projectRoutes")
const contactRoutes = require("./routes/contactRoutes")



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const profileRoutes = require("./routes/profileRoutes");
app.use("/api/profile", profileRoutes);
app.use("/api/skills",skillRoutes)
app.use("/api/projects",projectRoutes)
app.use("/api/contact", contactRoutes)

// Test Route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


module.exports = app;