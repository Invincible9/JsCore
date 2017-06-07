/**
 * Created by Mihail on 5/27/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let matrix = input.map(e => e.split(''));
    let matrixClone = input.map(e => e.toLowerCase().split(''));

    for (let row = 0; row < matrixClone.length - 2; row++) {
        for (let col = 0; col < matrixClone[row].length - 2; col++) {
            let current = matrixClone[row][col];

            if(current === matrixClone[row][col + 2] &&
                current === matrixClone[row+1][col+1] &&
                    current === matrixClone[row + 2][col] &&
                    current === matrixClone[row + 2][col + 2]){
                matrix[row][col] = '';
                matrix[row][col + 2] = '';
                matrix[row+1][col+1] = '';
                matrix[row + 2][col] = '';
                matrix[row + 2][col + 2] = '';
            }
        }
    }
    console.log(matrix.map(
        row => row.join('')).join('\n'));
}

// solve([
//     'abnbjs',
//     'xoBab',
//     'Abmbh',
//     'aabab',
//     'ababvvvv'
// ]);

solve([
    'puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'
])
