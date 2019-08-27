// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
let cardsInPlay = [];

// Check to see if the two cards are a match
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

// Choosing the cards
function flipCard() {
    const cardId = this.getAttribute('data-id');

    console.log("User flipped " + cards[cardId].rank);

    cardsInPlay.push(cards[cardId].rank);

    console.log(cards[cardId].suit);

    console.log(cards[cardId].cardImage);

    this.setAttribute('src', cards[cardId].cardImage)
    // if statement
    if (cardsInPlay.length === 2) {
        return checkForMatch();
    } 
}

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
    
};

createBoard();


