/**
 * Created by Mihail on 6/7/2017.
 */


function solve(input) {

    let minVal = input.reduce((e1, e2) => Math.min(e1, e2));
    let count = 30 - minVal;

    let arr = [];

    for (let i = 0; i < count; i++) {
        let mas = [];

        for (let j = 0; j < input.length; j++) {
            Number(input[j]++);

            if(Number(input[j]) <= 30) {
                mas.push(input[j]);
            }
        }
        arr.push(mas);
    }

    let result = [];
    for (let items of arr) {
        result.push(items.length);
    }

    let cubic = result.map(e => e * 195).reduce((e1, e2) => e1 + e2);

    console.log(result.map(e => e * 195).join(', '));
    console.log(cubic * 1900 + " pesos");
}

solve([21, 25, 28]);
solve([17]);
solve([17, 22, 17, 19, 17]);