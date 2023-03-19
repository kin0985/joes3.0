let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let num5 = document.querySelector('#num5');
let num6 = document.querySelector('#num6');
let num7 = document.querySelector('#num7');
let num8 = document.querySelector('#num8');
let num9 = document.querySelector('#num9');
let num0 = document.querySelector('#num0');
let op1 = document.querySelector('#op1');
let op2 = document.querySelector('#op2');
let op3 = document.querySelector('#op3');
let op4 = document.querySelector('#op4');
let op5 = document.querySelector('#op5');
let cancel = document.querySelector('#cancel');
let response = document.querySelector('#response');

let calc1 = 0;
let op = '';

function getResponse(){
    let text = response.innerHTML;
    return text.toString().replaceAll(/^0+/g,'');
}

num1.addEventListener('click', function(){
    console.log(1);
    let text = getResponse() + 1;
    response.innerHTML = text;
}); 

num2.addEventListener('click', function () {
    console.log(2);
    let text = getResponse() + 2;
    response.innerHTML = text;
});

num3.addEventListener('click', function () {
    console.log(3);
    let text = getResponse() + 3;
    response.innerHTML = text;
});

num4.addEventListener('click', function () {
    console.log(4);
    let text = getResponse() + 4;
    response.innerHTML = text;
});

num5.addEventListener('click', function () {
    console.log(5);
    let text = getResponse() + 5;
    response.innerHTML = text;
});

num6.addEventListener('click', function () {
    console.log(6);
    let text = getResponse() + 6;
    response.innerHTML = text;
});

num7.addEventListener('click', function () {
    console.log(7);
    let text = getResponse() + 7;
    response.innerHTML = text;
});

num8.addEventListener('click', function () {
    console.log(8);
    let text = getResponse() + 8;
    response.innerHTML = text;
});

num9.addEventListener('click', function () {
    console.log(9);
    let text = getResponse() + 9;
    response.innerHTML = text;
});

num0.addEventListener('click', function () {
    console.log(0);
    let text = getResponse() + 0;
    response.innerHTML = text;
});

op1.addEventListener('click', function () {
    console.log('/');
    
    if (op) {
        op4.click();
    }
    
    if (!op) {
        calc1 = getResponse();
    }

    if (op != '/') {
        op = '/'
    }

    let text = calc1 + op;
    response.innerHTML = text;

});

op2.addEventListener('click', function () {
    console.log('X');
    
    if (op) {
        op4.click();
    }
    
    if (!op) {
        calc1 = getResponse();
    }

    if (op != 'X') {
        op = 'X'
    }

    let text = calc1 + op;
    response.innerHTML = text;

});

op3.addEventListener('click', function () {
    console.log('-');
    
    if (op) {
        op4.click();
    }
    
    if (!op) {
        calc1 = getResponse();
    }

    if (op != '-') {
        op = '-'
    }

    let text = calc1 + op;
    response.innerHTML = text;
});

op5.addEventListener('click', function () {
    console.log('+');
    
        if(op) {
             op4.click();
         }
    
        if (!op) {
            calc1 = getResponse();
        }

        if (op != '+') {
            op = '+'
        }

        let text = calc1+ op;
        response.innerHTML = text;
        
});

cancel.addEventListener('click', function () {
    console.log('cancel');
    response.innerHTML = 0;
    op = '';
});

op4.addEventListener('click', function () {
    console.log('=');
    if (op) {
        let calc = 0;
        let calc2 = getResponse()
            .toString()
            .replaceAll(calc1 + op, '')

        calc1 = +calc1;
        calc2 = +calc2;

        if (op == '+') {
            calc = calc1 + calc2;
        }
        if (op == '-') {
            calc = calc1 - calc2;
        }
        if (op == 'X') {
            calc = calc1 * calc2;
        }
        if (op == '/') {
            calc = calc1 / calc2;
        }

        response.innerHTML = calc
        calc1 = getResponse();
        op = '';
    }


    let text = calc1 + op;
    response.innerHTML = text;
});