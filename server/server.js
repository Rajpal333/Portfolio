require("dotenv").config();

const app = require("./src/aap");
const connectDB = require("./src/config/db");

// Connect DB
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🔥`);
});