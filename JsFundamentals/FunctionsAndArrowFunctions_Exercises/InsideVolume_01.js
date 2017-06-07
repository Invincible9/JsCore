/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    function isInRange(x, y, z) {
        if ((x >= 10 && x <= 50) && (y >= 20 && y <= 80) && (z >= 15 && z <= 50)) {
            console.log("inside")
        } else {
            console.log("outside")
        }
    }

    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];
        isInRange(x, y, z);
    }

}

solve([8, 20, 22]);

solve([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);