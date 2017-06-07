/**
 * Created by Mihail on 5/30/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(row, col) {

    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(col);
    }

    let value = 1;

    let left = 0;
    let right = col - 1;

    let top = 0;
    let bottom = row - 1;

    while (value <= row * col) {

        for (let topSlide = left; topSlide <= right; topSlide++) {
            matrix[left][topSlide] = value++;
        }
        top++;

        for (let rightSlide = top; rightSlide <= bottom; rightSlide++) {
            matrix[rightSlide][right] = value++;
        }
        right--;

        for (let bottomSlide = right; bottomSlide >= left; bottomSlide--) {
            matrix[bottom][bottomSlide] = value++;
        }
        bottom--;

        for (let leftSlide = bottom; leftSlide >= top; leftSlide--) {
            matrix[leftSlide][left] = value++;
        }
        left++;
    }

    console.log(matrix.map(r => r.join(` `)).join(`\n`))
}

solve(5, 5);