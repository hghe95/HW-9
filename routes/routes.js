const fs = require(`fs`);
const path = require(`path`);

module.exports = app => {
    app.get(`*`, (req, res) => {
        res.sendFile(path.join(__dirname, `../public/index.html`));
    });

    app.get(`/notes`, (req, res) => {
        res.sendFile(path.join(__dirname, `../public/notes.html`))
    });

    function updateDB() {
        fs.writeFile(`db.json`, JSON.stringify(notes))
    }
}