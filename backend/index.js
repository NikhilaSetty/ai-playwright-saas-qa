const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});