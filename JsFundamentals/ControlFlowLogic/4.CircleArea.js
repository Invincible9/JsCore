/**
 * Created by Mihail on 9/20/2016.
 */

function calcCircleArea(radius) {
    let area = Math.PI * radius * radius;
    let areaFormat = area.toFixed(2);
    console.log(area);
    console.log(areaFormat);
}

calcCircleArea(['5']);