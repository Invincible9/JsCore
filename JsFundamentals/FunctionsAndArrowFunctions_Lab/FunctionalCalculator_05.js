/**
 * Created by Mihail on 5/26/2017.
 */

function calculator(a1, b1, sign) {
    let a = Number(a1);
    let b = Number(b1);

    let result = 0;

    switch(sign){
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        case "*":
            result = a * b;
            break;
        case "-":
            result = a - b;
            break;
    }

    return result;
}

console.log(calculator(1, -1, '-'));