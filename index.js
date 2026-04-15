const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;
const filePath = './mock_data/MOCK_DATA.json';

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
})

app.get('/api/users', (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
        }
        res.send(JSON.parse(data));
    });

})

app.listen(port, () => { console.log('Server is running on port ' + port) });