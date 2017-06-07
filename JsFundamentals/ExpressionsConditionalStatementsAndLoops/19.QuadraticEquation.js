/**
 * Created by Mihail on 5/25/2017.
 */

function solve(a,b,c) {
    // [a,b,c] = [a,b,c].map(Number);

    let d = Math.pow(b,2) - (4 * a * c);

    switch(true){
        case(d>0):
            let x1 = (-b + Math.sqrt(d)) / (2 * a);
            let x2 = (-b - Math.sqrt(d)) / (2 * a);
            console.log(x2);
            console.log(x1);
            break;
        case(d==0):
            let x = -b / (2 * a);
            console.log(x);
            break;
        case(d<0):
            console.log('No');
            break;
    }
}