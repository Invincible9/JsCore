/**
 * Created by Mihail on 6/2/2017.
 */

function solve([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let firstDistance = distance([x1,y1,x2,y2]);
    let secondDistance = distance([x2, y2, x3, y3]);
    let thirdDistance = distance([x1,y1,x3,y3]);

    let sum1 = firstDistance + secondDistance;
    let sum2 = firstDistance + thirdDistance;
    let sum3 = secondDistance + thirdDistance;

    let minDistance = (Math.min(sum1, sum2, sum3));

    if (minDistance == sum1){
        console.log("1->2->3: " + minDistance);
    }else if(minDistance == sum2){
        console.log("2->1->3: " + minDistance);
    }else{
        console.log("1->3->2: " + minDistance);
    }

    function distance([x1, y1, x2, y2]) {
        [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

        return (Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) );
    }
}