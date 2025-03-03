const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./src/routes/userRoutes");
const astrologerRoutes = require("./src/routes/astrologerRoutes");
const distributionRoutes = require("./src/routes/distributionRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/astrologers", astrologerRoutes); // Register astrologer routes
app.use("/api/distribution", distributionRoutes)

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Database Connected...."))
  .catch((error) => console.error("MongoDB Connection Error:", error));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
