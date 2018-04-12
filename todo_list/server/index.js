const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const currentPort = 3000;
const CL = console.log;
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.use('/', express.static('assets'));

app.post('/contact', urlencodedParser, (req, res) => {
	const userInfo = {
		userMail : req.body.email,
		userName : req.body.who
	};

	res.render('contact', userInfo);
});

app.get('/', (req, res) => {
	res.render('index', {pageName : 'Home page'});
});

app.listen(currentPort, () => {
	CL(`listening to port ${currentPort}`);
});
