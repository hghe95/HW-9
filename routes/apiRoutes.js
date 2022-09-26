const fs = require(`fs`);
const uuid = require(`uuid`);

module.exports = app => {
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