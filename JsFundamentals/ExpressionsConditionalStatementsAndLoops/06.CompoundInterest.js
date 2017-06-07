/**
 * Created by Mihail on 9/21/2016.
 */

function solve([principal, interest, period, time]) {
    // [principal, interest, period, time] = [principal, interest, period, time].map(Number);

    interest /= 100;
    let friquency = 12 / period;

    let total = principal * Math.pow(1 + interest / friquency, friquency * time);

    console.log(total.toFixed(2));
}

solve([1500, 4.3, 3, 6]);