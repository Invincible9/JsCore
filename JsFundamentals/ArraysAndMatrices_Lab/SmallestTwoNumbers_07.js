/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    console.log(input.map(Number).sort((e1,e2) => e1 - e2).splice(0, 2).join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);