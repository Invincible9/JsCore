/**
 * Created by Mihail on 6/1/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    let lastIndex = -1;
    let result = [];

    while (true) {
        let startIndex = input.indexOf('(', lastIndex + 1);

        if (startIndex === -1) {
            break;
        }

        lastIndex = input.indexOf(')', startIndex + 1);

        if (lastIndex === -1) {
            break;
        }

        result.push(input.slice(startIndex + 1, lastIndex));
        // startIndex = lastIndex + 1;
    }

    console.log(result.join(', '));
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');