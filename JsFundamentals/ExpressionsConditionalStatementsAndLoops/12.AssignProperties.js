/**
 * Created by Mihail on 9/22/2016.
 */

// function solve([par, name, par1, age, par2, gender]) {
//     console.log("{ " + par + ": " + "\'" + name + "\'" + ", " + par1 + ": " + "\'" + age + "\'" + ", " + par2 + ": " + "\'" + gender + "\'" + " }");
// }

function solve(args) {
    let key1 = args[0];
    let value1 = args[1];
    let key2 = args[2];
    let value2 = args[3];
    let key3 = args[4];
    let value3 = args[5];

    var myObject = {};

    myObject[key1] = value1;
    myObject[key2] = value2;
    myObject[key3] = value3;

    return myObject;
}


console.log(solve(['ssid', '90127461', 'status', 'admin', 'expires', '600']));
