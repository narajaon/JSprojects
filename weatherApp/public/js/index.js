const socket = io();
const CL = console.log;
const date = new Date();
const currentDate = () => {
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

socket.on('connect', function () {
	CL('Connected to server');

	socket.on('adminMsg', function (adminMsg) {
		CL(`${adminMsg.from} : ${adminMsg.message}`);
	});
});

socket.on('disconnect', function () {
	CL('Disconnected from  server');
});

socket.on('newUser', function (newUser) {
	CL(newUser.message);
});

//socket.emit('newMsg', msgUtils.constructor('User', 'Coucou !'));
