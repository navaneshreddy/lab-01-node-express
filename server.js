// Tasks 4-7: the same server rewritten with Express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Log every request with the status code it returned (Task 7)
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`);
  });
  next();
});

// GET / : welcome text
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Backend Development Fundamentals Lab 1 server!');
});

// GET /about : JSON with name and section
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'K Navaneswar Reddy',
    section: 'CSE QE 2A'
  });
});

// GET /time : current date and time
app.get('/time', (req, res) => {
  res.status(200).json({ time: new Date().toString() });
});

// 404 for any unknown path (must come after all other routes)
app.use((req, res) => {
  res.status(404).send(`404 Not Found: ${req.method} ${req.originalUrl} does not exist`);
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
