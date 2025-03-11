// myapp/server.js - Simple Express App
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions CI/CD!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
