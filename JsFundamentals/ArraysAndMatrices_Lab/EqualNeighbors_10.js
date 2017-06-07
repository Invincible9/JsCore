/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(matrix) {
    let count = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let current = matrix[row][col];
            if (row + 1 < matrix.length && current === matrix[row + 1][col])
                count++;
            if (col + 1 < matrix[row].length && current === matrix[row][col + 1])
                count++;
        }
    }
    console.log(count);
}


// solve([['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// );
//
// solve(
//     [['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]
// );

solve([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]
);



