// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Example endpoint for fetching quiz data
app.get('/api/quiz', (req, res) => {
    res.json([
        { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' }
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
