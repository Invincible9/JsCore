/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let km = Number(input[0]);
    let town = input[1];

    function checkState(state) {
        switch (state) {
            case "motorway":
                return 130;
                break;
            case "interstate":
                return 90;
                break;
            case "city":
                return 50;
                break;
            case "residential":
                return 20;
                break;
            default:
                break;
        }
    }

    let limit = checkState(town);
    if (limit - km >= 0) {
        console.log();
    } else {
        let difference = Math.abs(limit - km);

        if (difference <= 20) {
            console.log("speeding")
        } else if (difference <= 40) {
            console.log("excessive speeding");
        } else {
            console.log("reckless driving");
        }
    }

}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);