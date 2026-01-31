const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// fake user
const USER = {
  email: 'admin@test.com',
  password: 'Password@123'
};

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ token: 'fake-jwt-token-123' });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'nikhila' },
    { id: 2, name: 'qa' }
  ]);
});

app.post('/users', (req, res) => {
  const { name, job } = req.body;
  res.status(201).json({ id: Date.now(), name, job });
});

app.listen(4000, () => {
  console.log('API server running on http://localhost:4000');
});
