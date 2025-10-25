import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import sampleRoutes from "./routes/sampleRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

// load environment variables
dotenv.config();

// initialize express app
const app = express();

// Connect DB
connectDB();

const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://your-frontend.vercel.app", // later after frontend deploy
];

// Middleware
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/sample", sampleRoutes);

// health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server is running",
    timestamp: new Date().toISOString(),
  });
});

// error handling middleware (must be last)
app.use(errorHandler);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
