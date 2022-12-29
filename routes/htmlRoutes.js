const path = require(`path`);
//const express = require(`express`);
//const router = express.Router();

module.exports = app => {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, `../Develop/public/index.html`));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, `../Develop/public/notes.html`));
    });
};
