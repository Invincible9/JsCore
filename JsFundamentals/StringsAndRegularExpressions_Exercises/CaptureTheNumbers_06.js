/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let result = [];
    for (let line of input) {
        let regex = new RegExp('\\d+', 'g');
        let match;
        while (match = regex.exec(line)){
            result.push(match[0]);
        }
    }
    console.log(result.join(' '));
}

solve(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);

