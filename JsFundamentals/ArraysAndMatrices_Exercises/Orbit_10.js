/**
 * Created by Mihail on 5/31/2017.
 */

function solve(input) {

    let rows = Number(input[0]);
    let cols = Number(input[0]);

    let hitRow = Number(input[2]);
    let hitCol = Number(input[3]);

    function fillMatrix(rows, columns) {
        let newMatrix = [];
        for (let i = 0; i < rows; i++) {
            newMatrix.push([]);
            for (let j = 0; j < columns; j++) {
                newMatrix[i].push(0);
            }
        }
        return newMatrix
    }

    function processMatrix(matrix, hitRow, hitCol) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                let currentValue = Math.max(Math.abs(hitRow - row), Math.abs(hitCol - col)) + 1;
                matrix[row][col] = currentValue;
            }
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(row => {
            console.log(row.join(" "))
        });
    }

    let matrix = fillMatrix(rows, cols);
    processMatrix(matrix, hitRow, hitCol);
    printMatrix(matrix);

}


// solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);

