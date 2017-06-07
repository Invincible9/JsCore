/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
    let uniqueSeq = new Map();

    for (let line of input) {
        let arr = JSON.parse(line).sort((a, b) => b - a);
        let outArr = `[${arr.join(', ')}]`;
        uniqueSeq.set(outArr, arr.length);
    }

    [...uniqueSeq.keys()].sort((e1,e2) => uniqueSeq.get(e1) - uniqueSeq.get(e2)).forEach(e => {
        console.log(e);
    })

}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
solve(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);