// console.log("Up and running!");

const cardsInPlay = [];


let cards = [

{
rank : "queen",
suit : "hearts",
cardImage : "images/queen-of-hearts.png"
},

{
rank : "queen",
suit : "diamonds",
cardImage : "images/queen-of-diamonds.png"
},

{
rank : "king",
suit : "hearts",
cardImage : "images/king-of-hearts.png"
},

{
rank : "king",
suit : "diamonds",
cardImage : "images/king-of-diamonds.png"
}

];




function checkForMatch() {


 	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		//audio();
	} else {
		alert("Sorry, try again.");
	}

	
};


function flipCard() {

	let cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
		//console.log("User flipped " + cards[cardId].rank);
		//console.log(cards[cardId].cardImage);
		//console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
};


function createBoard(){
	const board = document.getElementById('game-board');

	for (i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		board.appendChild(cardElement);
	}
};


const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
	document.location.reload();
})




createBoard();










