/**
 * Created by Mihail on 5/26/2017.
 */

function triangleOfStars(count) {
    for (let i = 1; i <= count; i++)
        printStars(i);
    for (let i = count-1; i >= 1; i--) {
        printStars(i);
    }

    function printStars(count) {
        console.log("*".repeat(count));
    }
}


triangleOfStars(2);