function randomColor(el) {
    var r = (Math.trunc(Math.random() * 256));
    var g = (Math.trunc(Math.random() * 256));
    var b = (Math.trunc(Math.random() * 256));
    el.style.backgroundColor = `rgb(${r},${g},${b})`;
    return el.style.backgroundColor;

}

// randomColor()

function createBallon() {
    const ballonEl = document.createElement('div');
    ballonEl.className = 'ballon';

    ballonEl.style.left = Math.random() * 96 + 'vw';
    ballonEl.style.top = Math.random() * 96 + 'vh';

    const size = (Math.random() * 20) + 10 + 'px';
    ballonEl.style.width = size;
    ballonEl.style.height = size;
    randomColor(ballonEl);
    document.body.appendChild(ballonEl);

    setTimeout(function () {
        document.body.removeChild(ballonEl);
    }, 4200);
}

setInterval(createBallon, 100);