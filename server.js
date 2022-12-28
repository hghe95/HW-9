// Dependencies
const express = require(`express`);

//require(`./routes/routes`)(app);
const apiRoutes = require(`./routes/apiRoutes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

// Localhost and app initializer
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(`public`));

app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`App is now listening at localhost${PORT}`);
});