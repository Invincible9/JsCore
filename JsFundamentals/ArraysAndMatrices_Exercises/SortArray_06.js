/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    console.log(input.sort().sort((a, b) => (a.length - b.length)).join('\n'));
}

solve(['alpha',
    'beta',
    'gamma'
]);

