const container = document.querySelector('.game');
const number = document.querySelector('.number');
const sqr = document.getElementsByClassName('square');
const resetBut = document.querySelector('.reset')

getGrid(16);

function getGrid(a) {
    container.style.gridTemplateColumns = `repeat(${a},1fr)`;
    container.style.gridTemplateRows = `repeat(${a},1fr)`;
    for (let i = 0; i < a * a; i++) {
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
    let newNumb = parseInt(prompt('If you want, you can change the number. Max 100.'));
    if (newNumb <= 100 && newNumb > 0) {
        container.style.gridTemplateColumns = `repeat(${newNumb},1fr)`;
        container.style.gridTemplateRows = `repeat(${newNumb},1fr)`;
        sqr.style.width = `${416/newNumb}px`;
        sqr.style.heigth = `${416/newNumb}px`;
        getGrid(newNumb);
    }
}

hovering();

resetBut.addEventListener('click', reset);