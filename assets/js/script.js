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
})

function dragStart(event) {
    let item = event.target;
    if (!item.closest('.draggable')) return;
    if (item.classList.contains('draggable')) {
        item = item.firstElementChild;
    }
    console.log('DRAGSTART');
    event.dataTransfer.setData('text/plain', 'some data');
}

function drop(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    event.preventDefault();
    console.log('DROP', event.dataTransfer);
    let data = event.dataTransfer.getData('text/plain');
    container.textContent += data;
    container.classList.remove('over');
}

function dragOver(event) {
    let container = event.target;
    if (!container.classList.contains('container')) return;

    event.preventDefault();
    //container.classList.add('over');
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



// Check Result and Start Over Buttons 

document.getElementById('reset-button').addEventListener('click', resetFunction);

function resetFunction() {
    document.getElementsByClassName('container').value = "";
};