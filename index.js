// selectors
var inputName = document.querySelector('.player-name');
var enterButn = document.querySelector('.name');
var nameInput = document.querySelector('.name-input')
// Event Listeners
enterButn.addEventListener('click', addName);
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