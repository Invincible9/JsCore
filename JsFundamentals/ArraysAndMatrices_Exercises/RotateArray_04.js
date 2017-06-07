/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    let count = input.pop();

    for (let i = 0; i < count % input.length; i++) {
        let lastEl = input.pop();
        input.unshift(lastEl);
    }
    console.log(input.join(' '));
}

solve([1,
    2,
    3,
    4,
    2
]);

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);

