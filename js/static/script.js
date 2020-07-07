// alert("helloWorld");
// console.log(hello);
// challenge 1 your age in days
function ageInDays() {
    var birthYear = prompt("What is your birth date");
    var ageDays = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageDays + " days old");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// challenge 2:generate horse
var id = 1;

function horseGenerator() {
    var imgDiv = document.createElement('div');
    var button = document.createElement('button');


    var gif = document.createElement('img');
    gif.src = "https://media0.giphy.com/media/3o752hBiSh2dCNUYtW/100.webp?cid=ecf05e479a22e15716ef8ef5c98f79e5e2105d45f306c172&rid=100.webp";
    gif.alt = "This is alterntive text";
    gif.id = "image_" + id;
    button.id = "button_" + id;
    button.textContent = "Delete this" + id;
    button.addEventListener('click', function() {
        deleteByImageId(id);
    });
    imgDiv.appendChild(button);
    id++;

    // gif.className = "test";
    imgDiv.appendChild(gif);
    var div = document.getElementById('hrs-gen');
    div.appendChild(imgDiv);

}

function horseDegen() {

    var lastChild = document.getElementById('hrs-gen').lastChild;
    document.getElementById('hrs-gen').removeChild(lastChild); //here i hav a prblm i want to rmove 1 img at a time but all images gets removed.../
}

function deleteByImageId(content) {
    console.log("I am here", content);
    document.getElementById('image_' + content).remove();
}
//  CHALLENGE 3:CREATE ROCK PAPER SCISSOR GAME

function rpsGame(yourChoice) {
    console.log("mycchioice", yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numPickup(randInt());
    console.log('computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results); //{"message": 'Jitish', 'color':'green'}
    rpsFrontend(humanChoice, botChoice, message);


}

function randInt() {
    return Math.floor(Math.random() * 3);
}

function numPickup(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, botChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }
    };
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return { 'message': 'Haris Feri Khel', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'Draw bhayo.', 'color': 'yellow' };
    } else {
        return { 'message': 'Jitish,oO0 Party.', 'color': 'green' };
    }
}

function rpsFrontend(humanImgChoice, botImgChoice, finalMessage) {
    var imgDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissor': document.getElementById('scissor').src
        }
        // lets rmove all immages
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDatabase[humanImgChoice] + "' height=150 width=150 style='box-shadow:0px 13px 50px green;'><div style='font-size:20px;text-decoration:underline;color:black;margin:10px;border:3px solid green;'><b>TERO<b></div>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:10px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imgDatabase[botImgChoice] + "'  height=150 width=150 style='box-shadow:0px 13px 50px red;'><div style='font-size:20px;text-decoration:underline;color:black;margin:10px;border:3px solid red;'><b>BOT KO<b></div>";

    document.getElementById('flex-rps-div').appendChild(humanDiv);
    document.getElementById('flex-rps-div').appendChild(messageDiv);
    document.getElementById('flex-rps-div').appendChild(botDiv);


}

// CHALLENGE 4:CHANGE BUTTON COLORS.

var all_buttons = document.getElementsByTagName('button')
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    var demo = copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonChangeColor(btnselected) {
    if (btnselected.value === 'red') {
        btnRed();
    } else if (btnselected.value === 'green') {
        btnGreen();
    } else if (btnselected.value === 'reset') {
        btnReset();
    } else {
        btnRandom();
    }
}

function btnRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function btnGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function btnReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }


}

function btnRandom() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (let i = 0; i < all_buttons.length; i++) {
        let randNum = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randNum]);
    }
}



// CHALLENGE 5:BLACKJACK    






let blackjackGame = {
    'you': { 'scoreSpan': '#your-rslt', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-rslt', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'wins': 0,
    'loose': 0,
    'draws': 0,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a')
const winSound = new Audio('static/sounds/swish.mp3')
const lossSoud = new Audio('static/sounds/aww.mp3')

document.querySelector('#hit-btn').addEventListener('click', blackjackHit);

document.querySelector('#stand-btn').addEventListener('click', dealerLogic);


document.querySelector('#deal-btn').addEventListener('click', blackjackDeal);

function blackjackHit() {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {

    //   showResult(computeWinner());   FOR TWO PLAYERS USE THIS BRO UN COMMENT IT....
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#dealer-rslt').textContent = 0;
    document.querySelector('#your-rslt').textContent = 0;

}

function updateScore(card, activePlayer) {

    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {

        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function dealerLogic() {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);

    if (DEALER['score'] > 15) {
        let winner = computeWinner();
        showResult(winner);
    }
}
// compute winner and return who won 
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            console.log('You Win bro!');
            blackjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            console.log('You lost!!');
            blackjackGame['loose']++;
            winner = DEALER;
        } else {
            blackjackGame['draws']++;
            console.log('You drew!!');
        }
    } else if (YOU['score'] > 21 && DEALER['score'] < 21) {
        console.log('You lost');
        blackjackGame['loose']++;

        winner = DEALER;
    } else {
        blackjackGame['draws']++;

        console.log('You drew!');
    }
    console.log('Winner is', winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;
    if (winner === YOU) {
        message = 'You Win!';
        messageColor = 'green';
        winSound.play();
    } else if (winner === DEALER) {
        message = 'You Loose haris xya thuu!'
        messageColor = 'red';
        lossSoud.play();
    } else {
        message = 'You drew!';
        messageColor = 'yellow';

    }
    document.querySelector('#players').textContent = message;
    document.querySelector('#players').style.color = messageColor;

}