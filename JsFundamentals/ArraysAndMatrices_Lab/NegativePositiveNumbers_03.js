/**
 * Created by Mihail on 5/28/2017.
 */

function solve(input) {
    let result = [];

    for (let num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    result.forEach(e => console.log(e));
}

// solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);