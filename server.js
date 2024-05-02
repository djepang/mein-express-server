const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Armel Willkommen bei meinem ersten Express-Server!');
});

app.listen(PORT, () => {
    console.log(`Der Server läuft auf http://localhost:${PORT}`);
});
