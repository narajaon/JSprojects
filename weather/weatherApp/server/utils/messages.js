const date = new Date();
const currentHour = () => {
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const constructor = (from, message) => {
	return {
		from,
		message,
		msgDate : currentHour()
	};
};

module.exports = {
	currentHour,
	constructor
};
