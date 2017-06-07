/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input, delimiter) {
    let pattern = `[^${delimiter}]+`;
    let regex = new RegExp(pattern, 'g');
    console.log(input.match(regex).join('\n'));
}

solve('One-Two-Three-Four-Five',
    '-'
);

solve('http://platform.softuni.bg',
    '.'
);