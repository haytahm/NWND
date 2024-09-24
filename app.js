const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');

const taskRoutes = require("./routes/taskRoutes");

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://NWND:2001610@nwnd.bhaam.mongodb.net/NWND?retryWrites=true&w=majority&appName=NWND"
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware for serving static files from public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});


app.get('/', (req, res) => {
    res.redirect('/tasks');
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

//tasks router 
app.use(taskRoutes);

app.get('blogs', (req, res) => {
    res.render('blogs', { title: "All Blogs" });
});
app.get('/blogs/createBlog', (req, res) => {
    res.render('createBlog', { title: "Creating Blog" });
});

app.use((req, res) => {
    res.status(404).render('page404', { title: "Error 404" })
});