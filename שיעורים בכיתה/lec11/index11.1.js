const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('html')); // משרת קבצים סטטיים

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
