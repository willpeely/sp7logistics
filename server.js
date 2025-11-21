const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sendContactEmail = require('./send-email');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle contact form submission
app.post('/send-form', async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.send('Email sent successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error sending email.');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
