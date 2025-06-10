const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const path = require('path');

app.use(express.static(__dirname));
app.post('/api/post', (req, res) => {
    const { text } = req.body;
    res.json({
        text: text,
        likes:"("+ 0 + ")",
        comments:"("+ 0 + ")", 
    });
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(3000, () => console.log('Server running on port 3000'));