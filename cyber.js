const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    const name = req.query.name || "Please leave feedback";
    res.json({ message: `Welcome to our web services application, ${name}!` });
});

app.get('/goodbye', (req, res) => {
    res.json({ message: "Goodbye, see you soon!" });
});

app.get('/time', (req, res) => {
    res.json({ time: new Date().toLocaleString() });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
