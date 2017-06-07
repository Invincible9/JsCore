/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {string}
 */

function multiplyNumbers(input) {
    input = input.replace(/([-\d.]+)\s*\*\s*([-\d.]+)/g, (match, num, offset) => Number(num) * offset);
    console.log(input);
}

multiplyNumbers('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');

