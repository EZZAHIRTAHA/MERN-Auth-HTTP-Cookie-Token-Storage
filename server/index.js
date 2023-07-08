const express = require('express');
const app = express();
const PORT = 5000;


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello! ')
})