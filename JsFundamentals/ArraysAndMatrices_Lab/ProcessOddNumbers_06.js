/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    console.log(input.filter((e, i) => i % 2 === 1).map(e => e * 2).reverse().join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);