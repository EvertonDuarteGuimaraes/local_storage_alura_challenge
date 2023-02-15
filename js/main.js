const blocks = document.querySelectorAll('.block');

blocks.forEach(element => {
    element.addEventListener('click', (event) => {
        toggleLight(event.target);
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
