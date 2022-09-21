const fs = require(`fs`);
const path = require(`path`);
const uuid = require(`uuid`);

module.exports = app => {
    //html routes
    app.get(`*`, (req, res) => {
        res.sendFile(path.join(__dirname, `../public/index.html`));
    });

    app.get(`/notes`, (req, res) => {
        res.sendFile(path.join(__dirname, `../public/notes.html`))
    });

    //api routes
    app.get(`/api/notes`, (req, res) => {
        let data = JSON.parse(fs.readFileSync(`./db/db.json`, "utf8"));
        res.json(data);
    })

    app.post(`/api/notes`, (req, res) => {
        const newNote = req.body;
        newNote.id = uuid();
        let data = JSON.parse(fs.readFileSync(`./db/db.json`, "utf8"));
        data.push(newNote);
        fs.writeFileSync(`./db/db.json`, JSON.stringify(data));
        res.json(data);
    });
}