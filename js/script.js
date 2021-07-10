/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/*** 
 * `quotes` array 
 ***/
 let quotes = [{
	quote: 'The journey of a thousand miles begins with one step.',
	source: 'Lao Tzu'
}, {
	quote: `Our spirit is never ending
            So tell them it's us, us against the world.`,
	source: 'Killswitch Engage',
	citation: 'Us Against The World',
	album: 'Atonement',
	year: '2019'
}, {
	quote: `You're gonna need a bigger boat.`,
	source: 'Matt Hooper',
	citation: 'Jaws',
	year: '1975'
}, {
	quote: 'Want to try a game of lucky hit?',
	source: 'Ryo Hazuki',
	citation: 'Shenmue 2',
	developer: 'SEGA AM2',
	year: '2001'
}, {
	quote: 'Rip and tear, until it is done.',
	source: 'Seraphim',
	citation: 'DOOM',
	developer: 'ID Software',
	year: '2016'
}, {
	quote: 'Thundercats, HO!',
	source: 'Lion-O',
	citation: 'Thundercats',
	year: '1985'
}, {
	quote: 'I wish RPGs had more text.',
	source: 'Joe Redifer',
	citation: 'Game Sack',
	year: '2018'
}, {
	quote: `We've been trying to reach you about your car's extended warranty...`,
	source: 'Spam calls',
	citation: 'Cellphone',
	year: '2021'
}, {
	quote: 'Every man is guilty of all the good he did not do.',
	source: 'Voltaire'
}, {
	quote: 'In here? Doom.',
	source: 'Vincent Lauria',
	citation: 'The Color of Money',
	year: '1986'
}, {
	quote: 'How you doin?',
	source: 'Joey',
	citation: 'Friends'
}, {
	quote: 'Welcome to the party, pal.',
	source: 'John McClane',
	citation: 'Die Hard',
	year: '1988'
}, {
	quote: `It's-a-Me, Mario!`,
	source: 'Mario',
	citation: 'Super Mario 64',
	developer: 'Nintendo R&D1',
	year: '1996'
}, {
	quote: `I'm Batman`,
	source: 'Batman',
	citation: 'Batman',
	year: '1989'
}];
/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(arr) {
	let random = Math.floor(Math.random() * quotes.length);
	let quote = quotes[random];
	return quote; // Returns the quote variable which picks a quote at random
}
// This automatically refreshes the quote at a set interval of 10 seconds / learned from https://www.w3schools.com/jsref/met_win_setinterval.asp
const interval = setInterval(printQuote, 10000);
// This automatically refreshes the background color as the quotes refresh
const colors = setInterval(rgb, 10000);
// Generates the random RGB values and adds them to the background color. For use with the colors interval
function rgb() {
	let r = () => Math.floor(Math.random() * 255);
	let bgColor = `rgb(${r()}, ${r()}, ${r()})`;
	document.body.style.background = bgColor;
}

// My printQuote function has extra properties for 'album' and 'developer' based on music, or video game quote.
function printQuote() {
	let quote = getRandomQuote(quotes);
	let display = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
	if (quote.citation) { // Checks to see if the citation parameter is present in the quote
		display += `<span class="citation">${quote.citation}</span>`;
	}
	if (quote.year) { // Checks to see if the year parameter is present in the quote
		display += `<span class="year">${quote.year}</span>`;
	}
	if (quote.developer) {
		display += `<span class="developer">, ${quote.developer}</span>`;
	}
	if (quote.album) {
		display += `<span class="album">, ${quote.album}</span>`;
	}
	display += `</p>`;
	rgb();
	document.getElementById('quote-box').innerHTML = display;
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);