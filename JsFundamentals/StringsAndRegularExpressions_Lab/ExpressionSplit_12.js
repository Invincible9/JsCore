/**
 * Created by Mihail on 6/2/2017.
 */

function solve(input) {
    console.log(input.match(/[^\s\\(),;.]+/g).join('\n'));
}

solve('let sum = 4 * 4,b = "wow";');
solve('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');