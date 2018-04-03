const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const rootPath = path.join(__dirname, '..');
const msgUtils = require(`${rootPath}/server/utils/messages.js`);

const date = new Date();
const CL = console.log;

app.use(express.static(rootPath + '/public'));

io.on('connection', (socket) => {
	CL('[io]	User connect');

	socket.emit('adminMsg', msgUtils
		.constructor('Admin','Welcome to the chat room !'));

	socket.broadcast.emit('newUser', msgUtils
		.constructor('Bot', 'A new user joined the chat !'));

	socket.on('disconnect', () => {
		CL('[io]	User disconnected');
	});
});

http.listen(3000, () => {
	CL('[http]	Listening to port 3000');
});
