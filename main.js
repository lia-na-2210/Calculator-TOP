const keys = document.querySelector('.num-pad');
const display = document.querySelector('.display')


function calculator() {
    const m1 = [];
    const m2 = [];
    let operator;
    let lastKey = 'empty';

    keys.addEventListener('click', event => {
        const key = event.target;
        const keyValue = key.textContent;
        const type = event.target.parentElement.id;
        

        
    
        if(lastKey == 'empty') {
            display.textContent = '';
        }
    
        if (type == 'number') {
            if (lastKey == 'operator' || lastKey == 'number2') {
                lastKey = 'number2';
                display.textContent += keyValue
                m2.push(keyValue);
                
            } else{
                lastKey = 'number'
                display.textContent += keyValue
            }; 
            
        }
    
        if (type == 'operator') {
            if (lastKey == 'number2') {
                display.textContent = enter(m1, m2, operator);
            }
            lastKey = 'operator'
            m1.push(display.textContent)
            operator = keyValue
            display.textContent += keyValue;
        }
    
        if (type == 'equal') {
            display.textContent = enter(m1, m2, operator);

        }

        if (type == 'clear') {
            display.textContent = '0';
            lastKey = 'empty';
            m1.length = 0;
            m2.length = 0;
            operator = undefined;
        }
    
    
    })
    
}

function enter(m1, m2, operator) {
    console.log(m1)
    const firstNumber = m1.join('');
    const secondNumber = m2.join('');
    const operation = operator;

    const solution = math(firstNumber, secondNumber, operation);

    m1.length = 0;
    m2.length = 0;
    operator = undefined;
    lastKey = 'number'

    return solution
}

function math(first, second, operation) {
    const firstNumber = parseFloat(first).toFixed(2);
    const secondNumber = parseFloat(second).toFixed(2);

    if(firstNumber == '0' && operation == '/') {
        return 'Error';
    }

    if(secondNumber == '0' && operation == '/') {
        return 'Error';
    }

    if (operation == '+') return firstNumber + secondNumber;
    if (operation == '-') return firstNumber - secondNumber;
    if (operation == '*') return firstNumber * secondNumber;
    if (operation == '/') return firstNumber / secondNumber;
}

calculator();




