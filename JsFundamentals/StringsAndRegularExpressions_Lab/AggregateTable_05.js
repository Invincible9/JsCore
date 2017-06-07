/**
 * Created by Mihail on 6/1/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    let towns = [];
    let sum = 0;

    for (let line of input) {

        let pattern = '^((?:\\|\\s*)([A-Za-z]+\\s*[A-Za-z]+)(?:\\s+\\|\\s)(\\d+))$';
        let regex = new RegExp(pattern, 'g');

        let match = regex.exec(line);

        towns.push(match[2]);
        sum += Number(match[3]);
    }
    console.log(towns.join(", "));
    console.log(sum);
}

function solve(input) {
    let sum = 0;
    let towns = [];

    for(let line of input){
        let ln = line.split('|');
        // ln = ln.filter(x => x);
        console.log(ln);

        towns.push(ln[0].trim());
        sum += Number(ln[1]);
    }
    console.log(towns.join(", "));
    console.log(sum);

    let debug = "";
}


solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);
