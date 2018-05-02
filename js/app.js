const cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bomb", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

shuffle(cards);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const cardUlList = document.querySelector(".deck");
let newListItem;
let newIcon;
let myEventList = [];//just for check if the events are increasing

for (let i = 0; i < cards.length; i++) {
    newListItem = document.createElement("li");
    cardUlList.appendChild(newListItem).className = "card";

    newIcon = document.createElement("i");
    newListItem.appendChild(newIcon);
    newIcon.className = cards[i];

    newListItem.addEventListener("click", function (event) {
        currentLiClicked = this;
        this.className;
        console.log(this);
        displaySymbol();
        openCards();    
        
        myEventList.push(event);
    });       
}

function displaySymbol () {
    currentLiClicked.classList.add("show");
}

function openCards () {
    currentLiClicked.classList.add("open");

    let currentIcon = currentLiClicked.childNodes;
    let getIconClass;
    let openCards = [];
    //add to openCards list
   for (let j = 0; j < currentIcon.length; j++) {
        getIconClass = currentIcon[j].className; //gets a class name of currently clicked card     
        openCards.push(getIconClass);   //Pushes just one event, I know there is only one event at a time happening but I got super stuck on this one
    }
    console.log(openCards);  
    console.log(myEventList.length);
}


/*
 *If a card is clicked:
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position 
 * 
 * (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
