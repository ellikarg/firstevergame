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

    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
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

function dragStart(event) {
    let item = event.target;
    if (!item.closest('.draggable')) return;
    if (item.classList.contains('draggable')) {
        item = item.firstElementChild;
    }
    console.log('DRAGSTART');

    event.dataTransfer.setData('text/plain', event.target.textContent);
}

function drop(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    console.log(`drop: dropEffect = ${event.dataTransfer.dropEffect} ; effectAllowed = ${event.dataTransfer.effectAllowed}`
    );

    event.preventDefault();
    console.log('DROP', event.dataTransfer);
    let data = event.dataTransfer.getData('text/plain');
    container.replaceChildren(data);
    container.classList.remove('over');
}

function dragOver(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    event.preventDefault();
}

function mouseDown(event) {
    let item = event.target;
    if (!item.closest('.draggable')) return;
    item.style.cursor = 'grabbing';
}

function dragEnter(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    event.preventDefault();
    console.log('dragenter container');
    container.classList.add('over');
}

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
        //window.alert('This is the correct result');
        correctAnswer.showModal();
    } else {
        //window.alert(`Your result is ${myEquation}, it should be 24. Try again!`);
        wrongAnswer.showModal();
        document.getElementById('wrongResult').innerHTML = `Your result is ${myEquation}, it should be 24 :(<br> Try again!`;
    }
}

document.getElementById('reset-button').addEventListener('click', resetFunction);

function resetFunction() {
    let resetAll = document.getElementsByClassName('container');
    for (i = 0; i < resetAll.length; i++) {
        resetAll[i].innerHTML = "";
    };
}

document.getElementById('new-game').addEventListener('click', newGameFunction);

function newGameFunction() {
    resetFunction();
    randomNumbers();
}

