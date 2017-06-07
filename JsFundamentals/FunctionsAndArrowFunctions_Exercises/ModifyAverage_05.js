/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let result = input.toString().split('');

    while (true) {

        let sum = 0;
        let average = 0;

        for (let i = 0; i < result.length; i++) {
            sum += Number(result[i]);
        }
        average = sum / result.length;

        if (average <= 5) {
            result.push('9');
        } else {
            break;
        }
    }
    console.log(result.join(''));
}

function solveProblem(number) {

    let result = number.toString().split('');

    while ((result
        .map(Number)
        .reduce((a, b) => a + b) / result.length) <= 5) {
        result.push('9');
    }
    return result.join('');
}

function solveProblem(number) {

    number = number.toString();

    while ((number.toString().split('')
        .map(Number)
        .reduce((a, b) => a + b) / number.length) <= 5) {
        number = number + '9';
    }
    return number;
}

solve(101);
solve(5835);

console.log(solveProblem(101));
console.log(solveProblem(5835));
