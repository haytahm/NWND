const express = require('express');
const morgan= require ('morgan');

const mongoose = require ('mongoose');



const app = express();
const dbURI = 'mongodb+srv://haythamalqunber:nzwrzdPNUL2yJU4Z@nwnd.bhaam.mongodb.net/?retryWrites=true&w=majority&appName=NWND';
mongoose.connect(dbURI);


app.set('view engine' , 'ejs');
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    const tasks= [{title: "Abu Nour",
        description: "This is the first task",
        state : "in Progress",}];
    //res.send('<h1>Hello World</h1>');
res.render('index' ,{title : "Home",tasks} )
});
/*app.use((req,res,next)=> {
    console.log('new request made');
        next();
    })*/
   app.use(express.static('public'));
   app.use(morgan('dev'));
   
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