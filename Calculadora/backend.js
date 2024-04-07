var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
let history = [];
let historyList = document.getElementById('historyList');

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

function updateHistory(calculation) {
    history.push(calculation);
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = '';
    history.forEach((calculation) => {
        let li = document.createElement('li');
        li.textContent = calculation;
        historyList.appendChild(li);
    });
}

document.getElementById('eval').addEventListener('click', function() {
    let expression = screen.value;
    let result = eval(expression);
    let calculation = expression + ' = ' + result;
    updateHistory(calculation);
});
