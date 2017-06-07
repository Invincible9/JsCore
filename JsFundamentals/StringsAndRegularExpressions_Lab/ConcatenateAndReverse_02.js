/**
 * Created by Mihail on 5/31/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let result = input.reduce((e1, e2) => e1.concat(e2));

    let str = "";
    for (let i = result.length - 1; i >= 0; i--) {
        str += result[i];
    }
    console.log(str);
}

solve(['I', 'am', 'student']);