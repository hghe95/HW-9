// const { v4: uuidv4 } = require(`uuid`);
// let data = require(`../Develop/db/db.json`);

// module.exports = app => {
// app.get(`/api/notes`, (req, res) => res.json(data));
// //     console.log(`Performing GET request`);
// //     res.json(JSON.parse(fs.readFileSync(data, "utf-8"))
// // )});

// app.post(`/api/notes`, (req, res) => {
//     const title = req.body.title;
//     const text = req.body.text;
//     const file = { id: uuidv4(), title: title, text: text };
//     data.push(file);
//     console.log(`A new note has been added to the database!`)
//     res.json(file);
// });
// }
