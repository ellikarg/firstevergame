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

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('dragstart', dragStart);
    document.body.addEventListener('drop', drop);
    document.body.addEventListener('dragover', dragOver);

    document.body.addEventListener('mousedown', mouseDown);
    document.body.addEventListener('dragenter', dragEnter);
    document.body.addEventListener('dragleave', dragLeave);
});

/**
 * function that fires the drag Event to drag items into the equation area
 */
function dragStart(event) {
    let item = event.target;
    if (!item.closest('.draggable')) return;
    if (item.classList.contains('draggable')) {
        item = item.firstElementChild;
    }
    console.log('DRAGSTART');

    event.dataTransfer.setData('text/plain', event.target.textContent);
}

/**
 * function that fires the drop Event to drop items in the equation area
 */
function drop(event) {
    let container = event.target;
    let regex = /[+\-*/()123456789]/;
    console.log(regex);

    if (!container.classList.contains('container')) return;

    console.log(`drop: dropEffect = ${event.dataTransfer.dropEffect} ; effectAllowed = ${event.dataTransfer.effectAllowed}`
    );

    event.preventDefault();
    console.log('DROP', event.dataTransfer);
    let data = event.dataTransfer.getData('text/plain');
    if (regex.test(data)) {
        console.log('Regex true!');
        container.replaceChildren(data);
    } else {
        console.log('Regex false!');
    }
    container.classList.remove('over');
}

/**
 * function that fires the dragOver Event when items get dragged
 */
function dragOver(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    event.preventDefault();
}

/**
 * function that fires the mouseDown Event to make the mouse appear as 
 * a grabbing hand
 */
function mouseDown(event) {
    let item = event.target;
    if (!item.closest('.draggable')) return;
    item.style.cursor = 'grabbing';
}

/**
 * function that fires the dragEnter Event when the dragged items enter 
 * the dropzone
 */
function dragEnter(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    event.preventDefault();
    console.log('dragenter container');
    container.classList.add('over');
}

/**
 * function that fires the dragLeave Event when the dragged items exit 
 * the dropzone
 */
function dragLeave(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    event.preventDefault();
    container.classList.remove('over');
    console.log('dragleave container');
}



// Check Result, Reset Game and Start Over Buttons 

document.getElementById('submit-button').addEventListener('click', checkResult);
let wrongAnswer = document.querySelector('.wrong');
let closeWrong = document.querySelector('#close-wrong-button');
let correctAnswer = document.querySelector('.correct');
let closeCorrect = document.querySelector('#close-correct-button');

closeWrong.addEventListener('click', () => {
    wrongAnswer.close();
});

closeCorrect.addEventListener('click', () => {
    correctAnswer.close();
});

/**
 * function that checks whether the result equals 24
 */
function checkResult() {
    let equation = document.getElementsByClassName('container');
    let fullEquation = '';

    for (let j = 0; j < equation.length; j++) {
        let str = [equation[j].textContent];
        fullEquation += str;
    }
    console.log(fullEquation);
    let myEquation = eval(fullEquation);
    console.log(myEquation);

    if (myEquation === 24) {
        correctAnswer.showModal();
    } else {
        wrongAnswer.showModal();
        document.getElementById('wrongResult').innerHTML = `Your result is ${myEquation}, it should be 24 :(<br> Try again!`;
    }
}

document.getElementById('reset-button').addEventListener('click', resetFunction);

/**
 * function that fires when the reset button is clicked
 * it resets the game by emptying the equation area
 */
function resetFunction() {
    let resetAll = document.getElementsByClassName('container');
    for (i = 0; i < resetAll.length; i++) {
        resetAll[i].innerHTML = "";
    }
}

document.getElementById('new-game').addEventListener('click', newGameFunction);

/**
 * function that fires when the Start New Game button is clicked
 * it empties the equation area and sets new random numbers
 */
function newGameFunction() {
    resetFunction();
    randomNumbers();
}

