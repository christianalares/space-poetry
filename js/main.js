const poems = [
	`I rymden finns det stjärnor som liknar glänsande pärlor. Det är spännande att titta upp i rymden och se tecken tillexempel karlavagnarna. Det ser overkligt ut.`,
	`Rymden ser oändlig ut med alla sina stjärnor men vem vet om det finns något stopp bland allt det mörka`,
	`Rymden den tar aldrig slut och om du står på din balkong då ser du stjärnor. En stjärnorna föds i en nebulosa dör i ett svart hål. Ute i rymden finns det inget liv och det finns inga gubbar i rymden. Kom ihåg att rymden är stor och fin.`,
	`Uppe i den svarta rymden 
	ser man stjärnor och planeter
	eller 
	se in i drömmarna
	ett stjärnfall.
	Jag blir yr av den stora rymden
	några planeter är mindre än de andra.

	Jorden är vårt hem
	vi ska vara rädda om jorden.
	Det är vi som ska hålla jorden ren.
	Stjärnor föds i nebulosor och stjärnor dör.
	Dom stora stjärnorna dör och blir ett svart hål.

	Jag är ute på natten och tittar på stjärnorna.
	Jag ser stjärnfall.
	jag ser märkliga saker.
	jag ser olika tecken.
	Efter jag varit i drömmarna
	vaknar jag.`,

	`Rymden är svart och jättestor
	ibland ser man en av stjärnornas
	målningar.

	Planeter, galaxer och nebulosor, alla finns i rymden.
	Nebulosor gör stjärnor,
	stjärnor gör ljus och värme,
	ljus och värme gör liv
	och liv gör invånare på planeterna.`,
	`Den svarta natthimlens tid är kommen.
	Jag tittar upp mot skyn.
	Jag ser alla stjärnor lysa
	på natthimlen.`,
	`Rymden är oändlig och vacker.
	Den har vackra stjärnor som
	Belatrix, Sirius, Pegasus
	och vår sol.
	Rymdens galaxer är så vackra.
	Vårt solsystem med åtta planeter
	och en plotoid,
	Månens vackra månsken
	lyser upp mitt hus.`,


	`Det är fint på planeten     
	Det finns stjärnor i mina ögon`,

	
	`Stjärnor stjärnor
	dem älskar jag
	Jag ser dem på natten 
	men inte på dan
	Jag önskar
	jag önskar 
	jag kunde se dem i hela mitt liv
	men jag har inte tid
	
	
	En natt jag drömde 
	det var kallt och mörkt
	Men så kom det ett sken 
	som värmde mig ömt
	Det värmde mig 
	så jag somna
	till slut
	Och när jag vaknade 
	var jag i min sköna säng 
	igen`,
	`Rymdsken
	Rymden skiner starkt
	av alla stjärnor, solar och allt.
	Rymden är så svart,
	men ändå lyser stjärnorna upp allt.`,
	`Stjärnor är kristallerna i rymden`,
	`Rymden är svart och oändlig
	I rymden finns
	vårt lilla lilla solsystem
	där 8 små planeter snurrar
	i stora stora universum`,
	`Mitt tecken är våg
	Jag är glad att jag är våg
	Tecken finns där uppe
	Jag önska att jag kunde åka dit
	Det skulle vara coolt 
	Om jag skulle åka upp 
	Och kolla på mitt
	Stjärntecken`,
	`Tänk att små ord kan bli så stora och mäktiga 
	liksom stjärnorna kan de aldrig sluta fascinera 
	Ord går liksom att kombinera 
	i det oändliga
	och ännu mera`
]

$(document).ready(() => {
	const renderPoem = (poet) => {
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
		const randomPoem = poems[Math.floor(Math.random() * poems.length)]
		renderPoem(randomPoem)
	})
})