const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
const currentPort = 3000;
const CL = console.log;
const todoList = [];

//setting hbs as the view engine
app.set('view engine', 'hbs');

//setting assets has a static directory
app.use('/', express.static('assets'));

//adding the input to the todo list
app.post('/add', urlencodedParser, (req, res) => {
    todoList.push(req.body.todo);
    res.render('index', {pageName: 'Home page', todoList: todoList});
});

app.get('/', (req, res) => {
    res.render('index', {pageName : 'Home page'});
});

app.listen(currentPort, () => {
    CL(`listening to port ${currentPort}`);
});
