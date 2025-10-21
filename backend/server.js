// 1. Import Express
const express = require("express");
const mongoose = require("mongoose");

// Import cors
const cors = require("cors");

// 2. Create an Express application
const app = express();

// Configure CORS to allow requests from multiple origins
const corsOptions = {
  origin: [
    "http://127.0.0.1:3000", // Your current origin
    "http://localhost:3000", // Alternative localhost
    "http://127.0.0.1:5500", // Live Server default
    "http://localhost:5500", // Alternative localhost
  ],
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// 3. Define the port the server will run on
const PORT = process.env.PORT || 3001;

// --- Database Connection ---
const MONGO_URI = "mongodb://localhost:27017/billing-system";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected successfully."))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  });
// --- End of Database Connection ---

// 4. Create the health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

// 5. Define API routes
app.use("/api/auth", require("./routes/auth"));

// 6. Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
