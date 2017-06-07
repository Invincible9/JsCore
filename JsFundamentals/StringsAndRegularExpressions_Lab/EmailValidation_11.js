/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
   if(input.match(/^[A-Za-z0-9]+@[a-z.]+$/g) !== null ? console.log('Valid') : console.log('Invalid'));
}

solve('valid@email.bg');
solve('invalid@emai1.bg');