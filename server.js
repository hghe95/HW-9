// Dependencies
const express = require(`express`);
require(`./routes/routes`)(app);

// Localhost and app initializer
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(`public`));

// Listener
app.listen(PORT, () => {
    console.log(`App is now listening at localhost${PORT}`);
});