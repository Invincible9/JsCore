/**
 * Created by Mihail on 9/21/2016.
 */

function solve([x,y,z, x1, y1, z1]) {
    // [x,y,z, x1, y1, z1] = [x,y,z, x1, y1, z1].map(Number);

    let distance = Math.sqrt((Math.pow((x1-x),2)) + Math.pow((y1-y),2) + Math.pow((z1-z),2));

    return distance;
}

console.log(solve([3.5, 0, 1, 0, 2, -1]));