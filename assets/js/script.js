//Pop up window for showing the rules of the game

let rules = document.querySelector('.rules');
let openRules = document.querySelector('#open-rules-button');
let closeRules = document.querySelector('#close-rules-button');

openRules.addEventListener('click', () => {
    rules.showModal();
});

closeRules.addEventListener('click', () => {
    rules.close();
});
