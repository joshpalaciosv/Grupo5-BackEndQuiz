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
        { question: 'Seleccione el tema principal', options: ['HTML', 'JAVASCRIPT', 'CSS','BOOTSTRAP'], answer: 'p' }
    ]);
});


// Example endpoint for fetching quiz data
app.get('/api/html/quiz', (req, res) => {
    res.json([
        { question: 'Cual es la etiqueta para ubicar un parrafo?', options: ["body", 'p', 'section','a'], answer: 'p' },
        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' }
    ]);
});

// Example endpoint for fetching quiz data
app.get('/api/javascript/quiz', (req, res) => {
    res.json([
        { question: 'What is 2 + 5 - Orlando ?', options: ['3', '4', '5'], answer: '4' },
        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' }
    ]);
});


// Example endpoint for fetching quiz data
app.get('/api/css/quiz', (req, res) => {
    res.json([
        { question: 'What is 2 + 5 - Orlando ?', options: ['3', '4', '5'], answer: '4' },
        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' }
    ]);
});

// Example endpoint for fetching quiz data
app.get('/api/bootstrap/quiz', (req, res) => {
    res.json([
        { question: 'What is 2 + 5 - Orlando ?', options: ['3', '4', '5'], answer: '4' },
        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' }
    ]);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
