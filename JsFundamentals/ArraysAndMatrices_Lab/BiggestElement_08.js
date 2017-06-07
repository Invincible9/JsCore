/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let maxEl = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if(Number(input[row][col] > maxEl)){
                maxEl = Number(input[row][col]);
            }
        }
    }
    console.log(maxEl);
}

solve([[20, 50, 10],
    [8, 33, 145]]);


solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);

