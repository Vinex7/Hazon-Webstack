const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Define user routes directly in server.js
app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

app.post('/api/users', (req, res) => {
  res.json({ message: 'Create a new user' });
});

// Define project routes directly in server.js
app.get('/api/projects', (req, res) => {
  res.json({ message: 'Get all projects' });
});

app.post('/api/projects', (req, res) => {
  res.json({ message: 'Create a new project' });
});

// Example base route
app.get('/', (req, res) => {
  res.send('Welcome to Hazon Vinex API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

