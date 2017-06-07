/**
 * Created by Mihail on 5/28/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let result = [];
    let count = 1;
    input.filter(command => command === 'add' ? result.push(count++) : count++ && result.pop());
    result.length !== 0 ? console.log(result.join('\n')) : console.log("Empty");
}

solve(['add',
       'add',
       'add',
       'add'
]);

solve(['add',
       'add',
       'remove',
       'add',
       'add'
]);

solve(['remove']);