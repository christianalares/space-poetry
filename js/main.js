$(document).ready(() => {
	const renderPoet = (poet) => {
		const letters = poet.split('')
		const pTag = $('#poetry')

		pTag.html('')

		letters.forEach((letter, i) => {
			setTimeout(() => {
				const pTagMarkup = pTag.html()
				pTag.html(pTagMarkup + letter)
			}, 50 * i);
		})
	}

	// start up the SocketIO connection to the server - the namespace 'test' is also included here if necessary
	const socket = io.connect('http://172.16.20.235:5000')

	// this is a callback that triggers when the "my response" event is emitted by the server.
	socket.on('space', () => {
		renderPoet()
	})


	setTimeout(() => {
		renderPoet('tjenare mannen hejsan')
	}, 2000);
})
