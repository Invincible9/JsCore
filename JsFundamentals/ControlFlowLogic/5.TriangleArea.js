/**
 * Created by Mihail on 9/20/2016.
 */


function triangleArea(a,b,c) {
    // [a,b,c] = [a,b,c].map(Number);
    let per = (a + b + c)/2;
    let area = Math.sqrt(per * (per-a) * (per-b) * (per-c));

    return area;
}

console.log(triangleArea(['2', '3.5', '4']));