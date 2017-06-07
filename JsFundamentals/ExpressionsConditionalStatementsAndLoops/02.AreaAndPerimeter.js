/**
 * Created by Mihail on 9/21/2016.
 */

function areaAndPerimeter(sideA,sideB) {
    // let sideA = Number(args[0]);
    // let sideB = Number(args[1]);

    let area = sideA * sideB;
    let perimeter = 2*sideA + 2*sideB;

    console.log(area);
    console.log(perimeter);
}

areaAndPerimeter(['2', '2']);