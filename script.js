const container = document.querySelector('.game');
const number = document.querySelector('.number');
const textSize = document.querySelector('#number');
const sqr = document.getElementsByClassName('square');
const resetBut = document.querySelector('.reset');
const randomBut = document.querySelector('.random');
const blackBut = document.querySelector('.black');
let size = 16;
let color = 'black';

getGrid();

function getGrid() {
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    let sqrSize = size * size
    let a = 300 / size;
    for (let i = 0; i < sqrSize; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.height = `${a}px`;
        div.style.width = `${a}px`;
        container.appendChild(div);
    }
    hovering();
    textSize.innerHTML = `${size} x ${size}`;
};

function hovering() {
    // let es muy importante.
    for (let i = 0; i < sqr.length; i++) {
        sqr[i].removeEventListener('mouseover', function () {
                let baseCol = '0123456789ABCDEF';
                let randomCol = '#';
                for (let i = 0; i < 6; i++) {
                    randomCol += baseCol[Math.floor(Math.random() * 16)];
                }
                color = randomCol;
                sqr[i].style.backgroundColor = `${color}`;
            })
            sqr[i].addEventListener('mouseover', function () {
                sqr[i].style.backgroundColor = 'black';
            })
        }
    };

    function reset() {

        size = prompt('If you want, you can change the number. Max 100.');
        if (size <= 100 && size > 0) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            };
            getGrid();
        } else if (size == null) {
            return
        } else {
            alert('Are you ok?')
        }
        color = 'black';
    }

    function randomColor() {

        for (let i = 0; i < sqr.length; i++) {
            sqr[i].removeEventListener('mouseover', function () {
                sqr[i].style.backgroundColor = 'black';
            });
            sqr[i].addEventListener('mouseover', function () {
                let baseCol = '0123456789ABCDEF';
                let randomCol = '#';
                for (let i = 0; i < 6; i++) {
                    randomCol += baseCol[Math.floor(Math.random() * 16)];
                }
                color = randomCol;
                sqr[i].style.backgroundColor = `${color}`;
            })
        };
    }


    resetBut.addEventListener('click', reset);
    randomBut.addEventListener('click', randomColor);
    blackBut.addEventListener('click', hovering);