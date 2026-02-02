import express from "express";


const router = express.Router();

let users = [];

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "name required" });
  }

  const user = { id: Date.now(), name };
  users.push(user);

  res.status(201).json(user);
});

router.get("/", (req, res) => {
  res.json(users);
});

export default router;