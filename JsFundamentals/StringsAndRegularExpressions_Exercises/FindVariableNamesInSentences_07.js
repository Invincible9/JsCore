/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
    let obj = input.match(/\b_([A-Za-z0-9]+)\b/g).map(e => e.substr(1)).join(',');
    console.log(obj);
}

solve('The _id and _age variables are both integers.');
solve('Calculate the _area of the _perfectRectangle object.');
solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
