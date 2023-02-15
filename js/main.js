const nodeListBlocks = document.querySelectorAll('.block');
const blocks = Array.from(nodeListBlocks);

blocks.forEach(element => {
    element.addEventListener('click', (event) => {
        puzzleShuffle(event.target)
    });
});

function toggleLight (element) {
    if(element.classList.contains('gray')) {
        element.classList.remove('gray');
        element.classList.add('highlight');
    } else {
        element.classList.remove('highlight');
        element.classList.add('gray');
    }
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
