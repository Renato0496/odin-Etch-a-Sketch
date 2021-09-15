document.body.onload = createDivs(16*16);

function createDivs(size) {
    const divs = document.createElement('div');
    const container = document.getElementsByClassName('container');
    for (i = 0; i < size; i++) {
        container.appendChild(divs);
    }
}