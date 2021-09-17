const container = document.querySelector('.game');
const number = document.querySelector('.number');
const sqr = document.getElementsByClassName('square');
const resetBut = document.querySelector('.reset')

function getGrid() {
    for (i = 0; i < 256; i++) {

        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        container.appendChild(div);
    }
};

function hovering() {
    // let es muy importante.
    for (let i = 0; i < sqr.length; i++) {
        sqr[i].addEventListener('mouseover', function () {
            sqr[i].style.backgroundColor = 'black';
        })
    }
};

function reset() {
    for (let i = 0; i < sqr.length; i++) {
        sqr[i].style.backgroundColor = 'rgb(240, 240, 240)';
    }
}

getGrid();

hovering();

resetBut.addEventListener('click', reset);