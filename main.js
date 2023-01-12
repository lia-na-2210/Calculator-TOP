const keys = document.querySelector('.num-pad');
const calculator = document.querySelector('.calculator');
const monitor = document.querySelector('.display')
const m1 = [];

keys.addEventListener('click', event => {
    const key = event.target;
    const keyValue = key.textContent;
    const type = event.target.parentElement.id;
    const display = monitor.textContent;
    console.log(type);

if (type == 'number') {
    m1.push(keyValue);
    const firstNumber = m1.join('');
    display.textContent = firstNumber;  
}

})

