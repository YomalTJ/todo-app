import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

export default app;
