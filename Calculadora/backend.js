var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');


for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow(base, exponent) {
    screen.value = Math.pow(base, exponent);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function convert(type) {
    let value = parseFloat(screen.value);
    let convertedValue;

    switch (type) {
        case 'kg':
            convertedValue = value / 1000;
            break;
        case 'hg':
            convertedValue = value / 100;
            break;
        case 'dag':
            convertedValue = value / 10;
            break;
        case 'dg':
            convertedValue = value * 10;
            break;
        case 'cg':
            convertedValue = value * 100;
            break;
        case 'mg':
            convertedValue = value * 1000;
            break;
        default:
            break;
    }

    screen.value = convertedValue.toFixed(2) + " " + type;
}

function storeMemory() {
    memory = parseFloat(screen.value);
}

function recallMemory() {
    screen.value = memory;
}

function clearMemory() {
    memory = 0;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

