/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let table = '<table>\n';
    for (let line of input) {
        let arr = JSON.parse(line);
        table += `    <tr>\n        <td>${arr['name']}</td>\n        <td>${arr['position']}</td>\n        <td>${Number(arr['salary'])}</td>\n    <tr>\n`;
    }
    table += '</table>';
    console.log(table);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);