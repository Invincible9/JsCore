/**
 * Created by Mihail on 5/23/2017.
 */

function sumVat(input) {
    let sum = 0;
    for (let num of input)
        sum += num;
    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.20);
    console.log("total = " + sum * 1.20);
}

sumVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
sumVat([1.20, 2.60, 3.50]);

