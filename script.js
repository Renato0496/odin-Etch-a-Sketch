const container = document.querySelector('.game');

function getGrid() {
    for (i = 0; i < 256; i++) {

        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.appendChild(div);
    }
};
getGrid();