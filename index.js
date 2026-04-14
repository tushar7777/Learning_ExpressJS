const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('<h1>Hello World</h1>');
})

app.listen(port, () => { console.log('Server is running on port ' + port) });