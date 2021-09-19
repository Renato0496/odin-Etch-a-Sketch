const container = document.querySelector('.game');
const number = document.querySelector('.number');
const textSize = document.querySelector('#number');
const sqr = document.getElementsByClassName('square');
const resetBut = document.querySelector('.reset');
let size = 16;

getGrid();

function getGrid() {
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    let sqrSize = size*size
    let a = 300/size;
    for (let i = 0; i < sqrSize; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.height=`${a}px`;
        div.style.width=`${a}px`;
        container.appendChild(div);
    }
    hovering();
    textSize.innerHTML=`${size} x ${size} :)`;
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
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    size = prompt('If you want, you can change the number. Max 100.');
    if (size <= 100 && size > 0) {
        getGrid();
    }
}



resetBut.addEventListener('click', reset);