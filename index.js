const express = require('express');
const app = express();

app.use(express.static('www'));

app.get('/api/fine', (req, res) => {
  res.json({ feeling: "Great" })
});

app.get('/api/bad', (req, res) => {
  res.json({ feeling: "Awful" })
});

app.listen(3010, () => console.log("Running on http://localhost:3010"));
