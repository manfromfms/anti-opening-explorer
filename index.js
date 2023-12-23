const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use((req, res, next) => {
    console.log('Full Path:', req.originalUrl)

    res.sendFile(__dirname + '/cm-chessboard/' + req.originalUrl)
});