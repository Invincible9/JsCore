/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function countWords(input) {

    let arr = input.join('\n').toLowerCase().split(/[^A-Za-z0-9_]+/).filter(e => e !== '');
    let map = new Map();

    for (let item of arr) {
        if (!map.has(item)) {
            map.set(item, 1);
        } else {
            map.set(item, map.get(item) + 1);
        }
    }

    let sortArray = Array.from(map.keys()).sort((e1, e2) => e1.localeCompare(e2));
    sortArray.forEach(e => {
        console.log(`'${e}' -> ${map.get(e)} times`)
    });

}

countWords("Far too slow, you're far too slow.");
countWords('JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --');