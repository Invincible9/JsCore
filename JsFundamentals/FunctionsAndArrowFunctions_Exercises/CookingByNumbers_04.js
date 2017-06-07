/**
 * Created by Mihail on 5/29/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let number = Number(input.shift());

    for (let command of input) {

        switch (command){
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number+=1;
                break;
            case "bake":
                number*=3;
                 break;
            case "fillet":
                number -= (number * 20) / 100;
                break;
            default:
                break;
        }
        console.log(number);
    }
}

// solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
// solve([32, 'chop', 'dice', 'spice', 'bake', 'fillet']);
solve([9,
'dice',
'spice',
'chop',
'bake',
'fillet']);