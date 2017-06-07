/**
 * Created by Mihail on 5/24/2017.
 */

function printNumbers(number) {

    let num = Number(number);

    let str = "";
    for(let i = 1; i <= num; i++) {
        str += i;
    }
    return str;
}

console.log(printNumbers('11'));