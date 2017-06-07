/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(matrix) {

    let magicNum = matrix[0].reduce((a,b) => a +  b);

    for (let i in matrix) {
        let sumRow = matrix[i].reduce((a,b) => a + b);
        let sumCol = matrix.map(x => x[i]).reduce((a,b) => a + b);

        if((sumRow !== magicNum) || (sumCol !== magicNum)){
            return false;
        }
    }
    return true;
}

function solve(input) {

    // console.log(Math.max.apply(null, input.reduce((row1, row2) => row1.concat(row2))));
    // console.log(input.reduce((row1, row2) => row1.concat(row2)));

    let count = 0;
    let firstSumRow = 0;
    let middleSumRow = 0;
    let lastSumRow = 0;

    let firstSumCol = 0;
    let middleSumCol = 0;
    let lastSumCol = 0;

    while (true) {

        firstSumRow += Number(input[count][0]);
        lastSumRow += Number(input[count][input.length - 1]);
        middleSumRow += Number(input[count][input.length - 2]);

        firstSumCol += Number(input[0][count]);
        lastSumCol += Number(input[input.length - 1][count]);
        middleSumCol += Number(input[input.length - 2][count]);

        if (count === input.length - 1) {
            break;
        }
        count++;
    }

    if ((firstSumRow === lastSumRow) && (firstSumRow === middleSumRow) && (firstSumCol === lastSumCol) &&
        firstSumCol === middleSumCol) {
        console.log(true);
    } else {
        console.log(false);
    }

}

// console.log(solve([[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]
// ));

console.log(solve([ [11, 32, 45],
                    [21, 0, 1],
                    [21, 1, 1]]
));
//
// solve([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
// );
