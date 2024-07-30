const express = require('express');

const app = express();

app.set('view engine' , 'ejs');
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('index');
});
app.get('/about', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('about');
});
app.get('/tasks/newTask', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('createTask');
});
app.get('blogs', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('blogs');
});
app.get('/blogs/createBlog', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('createBlog');
});

app.use((req, res ) => {
    res.status(404).render('page404')});