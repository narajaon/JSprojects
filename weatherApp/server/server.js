const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const rootPath = path.join(__dirname, '..');

const date = new Date();
const CL = console.log;

app.use(express.static(rootPath + '/public'));

io.on('connection', (socket) => {
	const currentDate = () => {
		return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	};

	CL('[io]	User connect');

	socket.emit('createEmail', {
		userName : 'narajaon',
		message : 'Hello, World',
		msgDate : currentDate()
	});

	socket.on('clientResponse', (response) => {
		CL(`The server responded "${response.message}" - ${currentDate()}`);
	});

	socket.on('disconnect', () => {
		CL('[io]	User disconnected');
	});
});

http.listen(3000, () => {
	CL('[http]	Listening to port 3000');
});
