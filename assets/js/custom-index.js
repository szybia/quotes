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
	let quotesArray = quotes.split('\n\n');
	let randNum = getRandomNumber();
	var randomQuoteIndex = randNum % quotesArray.length;
	let [quote, author] = quotesArray[randomQuoteIndex].split('\n- ');
	console.log(quotesArray);
	$( '.quote' ).text(quote);
	$( '.author' ).text(author);
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