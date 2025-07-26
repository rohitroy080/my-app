// app.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory store
let items = [{ id: 1, name: "Sample" }];
let currentId = 2;

// Public route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'pass') {
    res.json({ token: 'test-token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Auth middleware
app.use((req, res, next) => {
  if (req.path === '/login') return next();
  if (req.headers.authorization !== 'Bearer test-token') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
});

// Routes
app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = { id: currentId++, name: req.body.name };
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx].name = req.body.name;
  res.json(items[idx]);
});

app.delete('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  items = items.filter(i => i.id !== id);
  res.status(204).send();
});

module.exports = app;
