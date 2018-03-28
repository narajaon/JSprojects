const socket = io();
const date = new Date();
const currentDate = () => {
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

socket.on('connect', function () {
	console.log('Connected to server');
});

socket.on('disconnect', function () {
	console.log('Disconnected from  server');
});

socket.on('createEmail', (newEmail) => {
	console.log(`${newEmail.userName} said : "${newEmail.message}" - ${newEmail.msgDate}`);

	socket.emit('clientResponse', {
		userName : newEmail.userName,
		message : 'Got the mail, ty',
	});
});
