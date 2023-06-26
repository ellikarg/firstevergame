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


/**
 * Function that generates random numbers
 * called when the script is first loaded
 * and after the "Start Over"-button is clicked
 */
function randomNumbers() {
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    let num3 = Math.floor(Math.random() * 9) + 1;
    let num4 = Math.floor(Math.random() * 9) + 1;

    document.getElementById('random-number-1').innerHTML = num1;
    document.getElementById('random-number-2').innerHTML = num2;
    document.getElementById('random-number-3').innerHTML = num3;
    document.getElementById('random-number-4').innerHTML = num4;

};

window.onload = randomNumbers();

// Drag and Drop

// Check Result and Start Over Buttons 

document.getElementById('reset-button').addEventListener('click', resetFunction);

function resetFunction() {
    document.getElementsByClassName('container').value = "";
};