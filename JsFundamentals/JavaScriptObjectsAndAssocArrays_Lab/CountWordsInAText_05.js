/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function countWords(inputLines) {
let text = inputLines.join('\n');
let words = text.split(/[^A-Za-z0-9_]+/)
    .filter(w => w !== '');
let wordsCount = {};
for (let w of words)
    wordsCount[w] ? wordsCount[w]++ :
        wordsCount[w] = 1;
return JSON.stringify(wordsCount);
}


// function countWords(input) {
//
//     let arr = input.split(/[^A-Za-z0-9_]+/g).filter(e => e !== '');
//
//     let result = {};
//
//     for (let key of arr) {
//         if (!result.hasOwnProperty(key)) {
//             result[key] = 1;
//         } else {
//             result[key]++;
//         }
//     }
//     return JSON.stringify(result);
// }

console.log(countWords(["Far too slow, you're far too slow."]));
// console.log(countWords('JS devs use Node.js for server-side JS.-- JS for devs'));