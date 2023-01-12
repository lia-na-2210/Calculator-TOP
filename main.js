const keys = document.querySelector('.num-pad');
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display')
const m1 = [];
let operation;

keys.addEventListener('click', event => {
    const key = event.target;
    const keyValue = key.textContent;
    const type = event.target.parentElement.id;

if (type == 'number') {
    m1.push(keyValue);
    const firstNumber = m1.join('');
    display.textContent = firstNumber;        
}

if (type == 'operator') {
    let operation = keyValue;
    console.log(operation);
    display.textContent += operation;
}

})

