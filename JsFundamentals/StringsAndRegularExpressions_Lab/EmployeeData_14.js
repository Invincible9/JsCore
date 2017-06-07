/**
 * Created by Mihail on 6/2/2017.
 */


function solve(input) {
    let pattern = '^([A-Z][a-zA-Z]*) \\- ([1-9][0-9]*) \\- ([A-Za-z0-9 -]+)$';
    let regex = new RegExp(pattern, "g");
    let result = [], match;

    for (let line of input) {
        while (match = regex.exec(line)) {
            result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
    console.log(result.join('\n'));
}

solve(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]);