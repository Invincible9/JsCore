/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let count = Number(input.shift());

    console.log(input.slice(0, count).join(' '));
    console.log(input.slice(-count).join(' '));
}

// function solve(input) {
//
//     let result = [];
//     let count = Number(input.shift());
//
//     for (let obj of input) {
//         result.push(obj);
//     }
//
//     result.reverse();
//
//     let firstEl = input.splice(0, count);
//     let lastEl = result.splice(0, count);
//     lastEl.reverse();
//
//     console.log(firstEl.join(' '));
//     console.log(lastEl.join(' '));
// }

solve([2,
    7, 8, 9]);

solve([3,
    6, 7, 8, 9]
)
