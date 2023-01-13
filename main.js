const keys = document.querySelector('.num-pad');
//const calculator = document.querySelector('.calculator');
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
                m1.push(keyValue)
                
            }; 
            
        }
    
        if (type == 'operator') {
            lastKey = 'operator'
            operator = keyValue
            display.textContent += keyValue;
        }
    
        if (type == 'equal') {
           const firstNumber = m1.join('');
           const secondNumber = m2.join('');
           const operation = operator;

           display.textContent = math(firstNumber, secondNumber, operation);

        }
    
    
    })
    
}

function math(first, second, operation) {
    const firstNumber = parseInt(first);
    const secondNumber = parseInt(second);

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




