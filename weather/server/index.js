const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const path = require('path');
const CL = console.log;
const app = express();
const homeHbs = {
		pageName : 'Home',
		welcomeMsg : 'Welcome to the internet'
};
const homePath = path.join(__dirname + '/..');
const aboutHbs = {
		pageName : 'About',
};

hbs.registerHelper('getCurrYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (string) => {
	return string.toUpperCase();
});

hbs.registerPartials(homePath + '/views/partials');

app.set('view engine', 'hbs');

app.use((req, res, next) => {
	const currDate = new Date().toString();
	const log = `${currDate} : ${req.method} ${req.url}`;

	fs.appendFile('./server/server.log', `${log}\n`, (err) => {
		CL('Could not append log file');
	});
	next();
});

app.get('/', (req, res) => {
	res.render('home.hbs', homeHbs);
});

app.get('/about', (req, res) => {
	res.render('about.hbs', aboutHbs);
});

app.listen(3000, () => {
	CL();
});
