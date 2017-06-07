/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(len, count) {

    let result = [1];

    for (let current = 1; current < len; current++) {
        let start = Math.max(current - count, 0);
        // let end = current;

        let sum = 0;
        sum += result.slice(start, current).map(Number).reduce((e1,e2) => e1 + e2);
        result[current] = sum;
    }

    console.log(result);
}

solve(6, 3);
solve(8,2);
