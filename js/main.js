$(document).ready(function () {
	// start up the SocketIO connection to the server - the namespace 'test' is also included here if necessary
	const socket = io.connect('http://172.16.20.235:5000')

	// this is a callback that triggers when the "my response" event is emitted by the server.
	socket.on('space', () => {
		
	})
})