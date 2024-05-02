
// Importiere das Express-Modul
const express = require('express');
// Erstelle eine Instanz von Express
const app = express();
// Definiere den Port
const PORT = 3000;
// Definiere eine Route, die auf Anfragen auf der Wurzel-URL antwortet
app.get('/', (req, res) => {
    res.send('Armel Thiery Djepang  Willkommen bei meinem ersten Express-Server!');
});
// Starte den Server und lausche auf dem definierten Port
app.listen(PORT, () => {
    console.log(`Der Server läuft auf http://localhost:${PORT}`);
});
