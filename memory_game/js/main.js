// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// Check to see if the two cards are a match
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

// Choosing the cards
function flipCard(cardId) {

    console.log("User flipped " + cards[cardId]);

    cardsInPlay.push(cards[cardId]);

    // if statement
    if (cardsInPlay.length === 2) {
        return checkForMatch();
    } 
}

flipCard(0);
flipCard(2);

