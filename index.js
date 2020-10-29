// selectors
var inputName = document.querySelector('.player-name');
var enterButn = document.querySelector('.name');
var nameInput = document.querySelector('.name-input');
var rollsDice = document.querySelector('.roll-dice');
var diceFigure = document.querySelector('.dice-figure')
var diceImg = document.querySelector('#dice-image');
var totalFigure = document.querySelector('.total-figure');
// Event Listeners
enterButn.addEventListener('click', addName);
rollsDice.addEventListener('click', rollDice)
// Functions
function addName(e){
    e.preventDefault();
    if (inputName.value){
        nameInput.classList.add('remov');
        enterButn.remove();
        inputName.remove();
        var playerName = document.createElement("p");
        playerName.innerText= inputName.value
        nameInput.appendChild(playerName);
        nameInput.classList.remove('remov');
        nameInput.classList.add('player');
    }
}
var myImageNum = {
    one: "../images/dice-1.png",
    two : "../images/dice-2.png",
    three : "../images/dice-3.png",
    four : "../images/dice-4.png",
    five : "../images/dice-5.png",
    six : "../images/dice-6.png"
}
var wordsNum ={
    one:1,
    two:2,
    three:3,
    four:4,
    five:5,
    six:6,
}
var i = 0
var Addition = 0;
function rollDice(e){
    e.preventDefault();
    if (i<5){
        i+=1
        console.log(i);
        min=Math.ceil(1);
        max= Math.floor(6);
        var randonNum = Math.floor(Math.random()*(max-min)+1)+min;
        diceFigure.innerText= randonNum;
        var got =Object.keys(wordsNum).find(key =>
            wordsNum[key]===randonNum);
        var link = myImageNum[got];
        console.log(link);
        diceImg.src = link;
        console.log(diceImg);
        Addition += randonNum
        totalFigure.innerText = Addition;
    }else{
        rollsDice.disabled = true
    }
}