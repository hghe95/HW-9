// Dependencies
const express = require(`express`);
const { v4: uuidv4 } = require(`uuid`);
const path = require(`path`);
//require(`./routes/routes`)(app);
// const apiRoutes = require(`./routes/apiRoutes`);
// const htmlRoutes = require(`./routes/htmlRoutes`);
let dataJSON = require(`./db/db.json`);
// Localhost and app initializer
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(`public`));

//app.use(`/api`, apiRoutes);
//app.use(`/`, htmlRoutes);

//HTML Routes
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `./public/index.html`));
});

app.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `./public/notes.html`));
});

//API Routes
app.get(`/api/notes`, (req, res) => { res.json(dataJSON) });

app.post(`/api/notes`, (req, res) => {
    const title = req.body.title;
    const text = req.body.text;
    const note = { id: uuidv4(), title: title, text: text };
    dataJSON.push(note);
    console.log(`A new note has been added to the database!`)
    res.json(dataJSON);
});

//Wildcard Route
app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, `./public/index.html`));
});

// Listener
app.listen(PORT, () => {
    console.log(`App is now listening at localhost${PORT}`);
});