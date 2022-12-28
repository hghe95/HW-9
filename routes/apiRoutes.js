const express = require(`express`);
const router = express.Router();
const uuid = require(`uuid`);
let data = require(`./db/db.json`);

app.get(`/api/notes`, (req, res) => res.json(data));

app.post(`/api/notes`, (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    const file = { id: uuid.v4(), title: title, text: text };
    data.push(file);
    res.json(file);
});

module.exports = router;
