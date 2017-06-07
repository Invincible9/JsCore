/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let nums = [];

    for (let i = 0; i < input.length; i++) {
        if(i % 2 === 0){
            nums.push(input[i]);
        }
    }
    console.log(nums.join(' '));
}

solve(['20', '30', '40']);