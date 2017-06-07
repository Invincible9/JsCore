/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
    console.log(input.match(/[^\s+]+/g).map(e => e.replace(e, e.charAt(0).toUpperCase() + e.substr(1).toLowerCase())).join(' '));
}

solve('Capitalize these words');
solve('Was that Easy? tRY thIs onE for SiZe!');
