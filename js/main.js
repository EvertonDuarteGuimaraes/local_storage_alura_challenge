const nodeListBlocks = document.querySelectorAll('.block');
const blocks = Array.from(nodeListBlocks);
const colorButton = document.querySelectorAll('.menu__button--color');
const grey = 'grey';
const menu = document.querySelector('.menu__list');
const menuButton = document.querySelector('.menu__button');
const tries = document.querySelector('.tries__number');

let countdown = parseInt(tries.textContent);
let currentHighLight = 'highlight--main';
let currentBorder = 'item__border--main';

blocks.forEach(element => {
    element.addEventListener('click', (event) => {
        puzzleShuffle(event.target);
        winCondition();
    });
});

function toggleLight (element) {   
    if(!element.classList.contains(grey)) {
        element.classList.remove(currentHighLight);
        element.classList.add(grey);

        return;
    } 

    element.classList.remove(grey);
    element.classList.add(currentHighLight);
}

function puzzleShuffle (element) {
    toggleLight(element);
    if (blocks.indexOf(element) - 1 >= 0) {
        toggleLight(blocks[blocks.indexOf(element) - 1]);
    }
    if (blocks.indexOf(element) - 3 >= 0) {
        toggleLight(blocks[blocks.indexOf(element) - 3]);
    }
    if (blocks.indexOf(element) + 1 < blocks.length) {
        toggleLight(blocks[blocks.indexOf(element) + 1]);
    } 
    if (blocks.indexOf(element) + 3 < blocks.length) {
        toggleLight(blocks[blocks.indexOf(element) + 3]);
    }
    if (blocks.indexOf(element) === 3) {
        toggleLight(blocks[2]);
    }
    if (blocks.indexOf(element) === 6) {
        toggleLight(blocks[5]);
    }
    if (blocks.indexOf(element) === 2) {
        toggleLight(blocks[3]); 
    }
    if (blocks.indexOf(element) === 5) {
        toggleLight(blocks[6]);
    }
}

function toggleMenu () {
    if(!(menu.style.display === 'none')) {
        menu.style.display = "none";

        return;
    }

    menu.style.display = "flex";
}

menuButton.addEventListener('click', (event) => {
    toggleMenu();
});

colorButton.forEach(element => {
    element.addEventListener('click', (event) => {
        changeAllHighlights(event.target.textContent);
        menuButton.innerHTML = event.target.textContent;
        toggleMenu();
    });
});

function changeAllHighlights (color) {
    const highlights = document.querySelectorAll(`.${currentHighLight}`);
    const borders = document.querySelectorAll(`.${currentBorder}`);

    highlights.forEach (element => {
        element.classList.remove(currentHighLight);
        element.classList.add(changeHighlight(color));
    });

    borders.forEach (element => {
        element.classList.remove(currentBorder);
        element.classList.add(changeBorder(color));
    });

    currentHighLight = changeHighlight(color);
    currentBorder = changeBorder(color);
}

function  changeHighlight (color) {

    let newHighlight = '';

    if (color === 'Orange') {
        newHighlight = 'highlight--main';
    } else if (color === 'Purple') {
        newHighlight = 'highlight--second';
    } else {
        newHighlight = 'highlight--third';
    }

    return newHighlight;
}

function changeBorder (color) {
    let newBorder = '';

    if (color === 'Orange') {
        newBorder = 'item__border--main';
    } else if (color === 'Purple') {
        newBorder = 'item__border--second';
    } else {
        newBorder = 'item__border--third';
    }

    return newBorder;
}

function winCondition () {
    countdown--;
    tries.innerHTML = JSON.stringify(countdown);
    let hasAnyGreyBlock = 0;
    blocks.forEach(element => {
        if (element.classList.contains('grey')) {
            hasAnyGreyBlock++;
        }
    });
    if (hasAnyGreyBlock === 0) {
        alert('You Win!');
    }
    if (countdown === 0) {
        alert('You lose!');
        location.reload();
    }  
}