/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve([x1, y1, x2, y2]) {

    function constructAnswer([x1, y1, x2, y2]) {
        if (distance([x1, y1, x2, y2])) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    constructAnswer([x1, y1, 0, 0]);
    constructAnswer([x2, y2, 0, 0]);
    constructAnswer([x1, y1, x2, y2]);

    function distance([x1, y1, x2, y2]) {
        [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

        return ((Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))) % 1 === 0);
    }
}


solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);