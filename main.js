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
        const type = event.target.id;
        
        if(lastKey == 'empty') {
            display.textContent = '';
        }
    
        if (type == 'number') {
            if (lastKey == 'operator' || lastKey == 'number2') {
                lastKey = 'number2';
                display.textContent += keyValue;
                m2.push(keyValue);              
            } else{
                lastKey = 'number'
                display.textContent += keyValue;
            }; 
            
        }
    
        if (type == 'operator') {
            if (lastKey == 'number2') {
                display.textContent = enter(m1, m2, operator);
            } else if (lastKey == 'number') {
                lastKey = 'operator'
                m1.push(display.textContent)
                operator = keyValue
                display.textContent += keyValue;
            } else {
                return
            }
            
        }
    
        if (type == 'equal') {
            console.log(lastKey)
            if (lastKey == 'empty' || lastKey == 'operator') {
                display.textContent = '0'
                return
            } else if(lastKey == 'number') {
                return
            } else {
                const solution = enter(m1, m2, operator);
                if (solution % 1 == 0) {
                    display.textContent = solution;
                lastKey = 'number';
                } else {
                    display.textContent = solution.toFixed(2); 
                    lastKey = 'number';
                }
            }
            
            
        }

        if (type == 'clear') {
            display.textContent = '0';
            lastKey = 'empty';
            m1.length = 0;
            m2.length = 0;
            operator = undefined;
        }

        if(type == 'delete') {
            console.log(lastKey)
            const monitor = display.textContent;
            
            if (monitor.length == 1 && lastKey == 'number') {
                display.textContent = '0';
                lastKey = 'empty';

                return
            }
            
            if (m2.length == 0 && lastKey == 'number2') {
                lastKey = 'operator'
                return
            }

            if (lastKey == 'number') {
                const monitor = Array.from(display.textContent);
                monitor.pop();
                display.textContent = monitor.join('');
            } else if (lastKey == 'operator') {
                const monitor = Array.from(display.textContent);
                monitor.pop();
                display.textContent = monitor.join('');
                m1.length = 0;
                operator = undefined;
                lastKey = 'number'
            } else if (lastKey == 'number2'){
                m2.pop();
                display.textContent = m1.join('') + operator +m2.join('');
            } else if (lastKey == 'empty') {
                display.textContent = '0';
                lastKey = 'empty';
                return
            }
        }
    
    })
    
}

function enter(m1, m2, operator) {
    const firstNumber = m1.join('');
    const secondNumber = m2.join('');
    const operation = operator;

    const solution = math(firstNumber, secondNumber, operation);

    m1.length = 0;
    m2.length = 0;
    operator = undefined;
    
    return solution
}

function math(first, second, operation) {
    const firstNumber = parseFloat(first);
    const secondNumber = parseFloat(second);

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




