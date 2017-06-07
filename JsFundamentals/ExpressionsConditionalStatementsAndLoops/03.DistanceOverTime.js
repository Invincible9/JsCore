/**
 * Created by Mihail on 9/21/2016.
 */

function distance([v1,v2,t]) {
    // let v1 = Number(args[0]);
    // let v2 = Number(args[1]);
    // let t = Number(args[2]);

    let seconds = (t / 60)/60;
    let delta = Math.abs(v1 - v2);
    let s = delta * seconds;
    s = s * 1000;

    return s;
}

console.log(distance(['11', '10', '120']));