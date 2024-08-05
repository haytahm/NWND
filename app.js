const express = require('express');

const app = express();

app.set('view engine' , 'ejs');
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    const tasks= [{title: "Task One",
        description: "This is the first task",
        state : "in Progress",}];
    //res.send('<h1>Hello World</h1>');
res.render('index' ,{title : "Home",tasks} )
});
app.get('/about', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('about',{title : "About"} );
});
app.get('/tasks/newTask', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('createTask',{title : "Adding Task"});
});
app.get('blogs', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('blogs' ,{title : "All Blogs"});
});
app.get('/blogs/createBlog', (req, res) => {
    //res.send('<h1>Hello World</h1>');
res.render('createBlog',{title : "Creating Blog"});
});

app.use((req, res ) => {
    res.status(404).render('page404',{title : "Error 404"})});