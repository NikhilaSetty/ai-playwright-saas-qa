import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());

// ---- Routes ----
app.use("/users", usersRouter);

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "Password@123") {
    return res.json({
      token: "fake-jwt-token-123",
    });
  }

  return res.status(401).json({
    error: "Invalid credentials",
  });
});

// ---- Server ----
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});