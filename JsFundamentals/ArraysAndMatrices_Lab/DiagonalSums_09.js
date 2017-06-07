/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    let leftDiag = 0;
    let rightDiag = 0;

    for (let i = 0; i < input.length; i++) {
        leftDiag += Number(input[i][i]);
        rightDiag += Number(input[i][input.length - 1 - i]);
    }

    console.log(leftDiag + " " + rightDiag);
}

solve([[20, 40],
    [10, 60]]);


solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);