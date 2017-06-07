/**
 * Created by Mihail on 5/31/2017.
 */

function solve(arr) {

    let row = Number(arr[0]);
    let col = Number(arr[1]);
    let x = Number(arr[2]);
    let y = Number(arr[3]);

    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(col);
    }

    function checkMatrix() {
        for (let arrNums of matrix) {
            for (let num of arrNums) {
                if (num === undefined) {
                    return false
                }
            }
        }
        return true
    }

    let orbitNum = 0;
    while (true) {

        for (let i = x - orbitNum; i <= x + orbitNum; i++) {
            for (let j = y - orbitNum; j <= y + orbitNum; j++) {

                let isInMatrix = (i >= 0 && i < row) && (j >= 0 && j < col);
                if (!isInMatrix) continue;

                let newOrbit = !((i >= x - orbitNum + 1 && i <= x + orbitNum - 1) &&
                (j >= y - orbitNum + 1 && j <= y + orbitNum - 1));

                if (newOrbit) {
                    matrix[i][j] = orbitNum + 1;
                }
            }
        }
        orbitNum++;

        if (checkMatrix()) {
            break;
        }
    }

    return matrix.map(r => r.join(` `)).join(`\n`)
}

console.log(solve([5, 5, 2, 2]));
// console.log(solve([4, 4, 0, 0]));
// console.log(solve([3, 3, 2, 2]));