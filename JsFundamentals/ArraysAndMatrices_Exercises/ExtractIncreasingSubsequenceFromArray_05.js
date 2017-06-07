/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    // function solve(arr) {
    //
    //     arr = arr.map(Number);
    //
    //     let result = arr.filter((x, i) => x >= Math.max(...arr.slice(0, i + 1)));
    //
    //     console.log(result.join('\n'));
    // }
    //
    // function solve(arr) {
    //     console.log(arr.filter((x, i) => x >= Math.max(...arr.slice(0, i + 1))).join('\n'));
    // }


    let result = [];
    result.push(input[0]);

    let count = 0;
    for (let i = 0; i < input.length - 1; i++) {
        if (input[count] <= input[i + 1]) {
            result.push(input[i + 1]);
            count = i + 1;
        } else {
            continue;
        }
    }

    console.log(result.join('\n'));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);

solve([20,
    3,
    2,
    15,
    6,
    1
]);

solve([1,
    2,
    3,
    4
]);