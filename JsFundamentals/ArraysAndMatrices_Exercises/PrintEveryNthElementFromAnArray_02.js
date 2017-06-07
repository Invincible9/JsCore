/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let count = Number(input.pop());
    console.log(input.filter((e,i) => i % count === 0).join('\n'));
}

solve([5,
    20,
    31,
    4,
    20,
    2
]);

solve(['dsa',
    'asd',
    'test',
    'tset',
    '2'
])