function readTextFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("text/plain")
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status == 0)) {
				displayQuote(rawFile.responseText);
		}
    }
    rawFile.send(null);
}

function displayQuote(quotes) {
	//	Parse quotes.txt file into [
	// 		{
	//			'quote': <quote>
	//			'author': <author>
	// 	}
	// ]
	let q = quotes
					.split('\n\n')
					.map(quote => quote.replace('\n', ''))
					.map(quote => quote.split('- '))
					.map(quote => {
						return {
							"quote": quote[0],
							"author": quote[1]
						}
					});
	let randomQuoteIndex = getRandomNumber() % q.length;
	let randomQuote = q[randomQuoteIndex];
	$( '.quote' ).text(randomQuote['quote']);
	$( '.author' ).text(randomQuote['author']);
}

function getRandomNumber() {
	let array = new Uint32Array(1);
	window.crypto.getRandomValues(array);
	return array[0];
}

readTextFile("./quotes.txt");

$(window).on("load", function(){

		$('#loading').fadeOut();

		$(".hero").fadeTo(1000,1);
});