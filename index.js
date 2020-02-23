const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static(__dirname));
const server = app.listen(PORT);
console.log(`Server starting on: http://localhost:${PORT}`);