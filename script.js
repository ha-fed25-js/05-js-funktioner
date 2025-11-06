// 9* Tänk dig att du har en hög med kort. På varje kort står ett tal. Vi kan representera korten med ett tal. Din uppgift är att skriva funktioner som hanterar kortleken. Utgå från att du har en variabel "deck", som är en lista som representerar hela kortleken. Till din hjälp har du funktionerna "shift" och "push" som även finns på MDN.

// 9a
// Returnerar en lista med så många kort som parameterns värde. Korten ska komma i ordning, med 1 först, sedan 2 osv.
// Tips: använd en loop och funktionen lista.push(x)
// function makeDeck(numberOfCards)
let deck = []; // kortleken är tom från början

function makeDeck(numberOfCards) {
  for (let index = 1; index <= numberOfCards; index++) {
    deck.push(index);
  }

  return deck;
}

deck = makeDeck(5);

console.log("deck4", deck);
// → ska bli [1, 2, 3, 4, 5]

// 9b
// Skriver ut värdet på översta kortet. Kortet ligger kvar.

function peekTop() {
  //   let firstCard = deck.shift();
  let firstCard = deck[0];

  console.log("deck5", deck);
  return firstCard;
}

// peekTop(); // ska skriva ut "1"
// console.log(peekTop());

// 9c
// Drar översta kortet, så att det inte längre finns kvar i kortleken. Använd funktionen "shift".
// function draw()  // returnera det dragna kortet

function draw() {
  let pickCard = deck.shift();

  console.log("deck5", deck);
  return pickCard;
}

// peekTop(); // ska skriva ut "1"
// console.log(draw());

// 9d
// Lägger ett kort underst. Använd funktionen "push".
// function putBottom(cardNumber)

function putBottom(cardNumber) {
  return deck.push(cardNumber);
}

console.log(putBottom(8));
// console.log("deck6", deck);

// 9e
// Skriver ut alla kort i kortleken.
// function printDeck()

function printDeck() {
  for (let index = 0; index < deck.length; index++) {
    console.log("printDeckfunction", deck[index]);
  }
}
printDeck();
