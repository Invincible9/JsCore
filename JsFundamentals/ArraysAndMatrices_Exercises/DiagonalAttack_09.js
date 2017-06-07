/**
 * Created by Mihail on 5/29/2017.
 */

function diagonalAttack(input) {

    let matrix = input.map(e => e.trim().split(' '));

    let sumLeftDiag = 0;
    let sumRightDiag = 0;

    let left = [];
    let right = [];
    for (let i = 0; i < matrix.length; i++) {
        sumLeftDiag += Number(matrix[i][i]);
        sumRightDiag += Number(matrix[i][matrix.length - 1 - i]);

        left.push([i , i ]);
        right.push([i , matrix.length - 1 - i ]);
    }

    if(sumLeftDiag === sumRightDiag){
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    // if(i !== j && j !== matrix.length - 1 - i){
                    //     matrix[i][j] = sumLeftDiag;
                    // }

                    let leftSide = left.some(e => e[0] === i && e[1] === j);
                    let rightSide = right.some(e => e[0] === i && e[1] === j);

                    if(!(rightSide) && !(leftSide)){
                        matrix[i][j] = sumLeftDiag;
                    }

                }
            }
    }
    console.log(matrix.map(e => e.join(' ')).join('\n'));
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);