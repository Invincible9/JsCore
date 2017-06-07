/**
 * Created by Mihail on 9/21/2016.
 */

function solve(num) {
    // let num = Number(args[0]);

    let feet = num / 12;
    let inches = num % 12;

    console.log(Math.floor(feet) + "'" + "-" + inches + '"')
}

solve(['55']);
