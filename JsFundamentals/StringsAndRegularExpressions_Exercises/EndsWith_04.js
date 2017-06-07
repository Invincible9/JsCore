/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input, delimiter) {
    if (input.match(delimiter) ? console.log(true) : console.log(false));
}

solve('This sentence ends with fun?',
    'fun?'
);

solve('This is Houston, we have…',
    'We have…'
);

solve('The new iPhone has no headphones jack.',
    'o headphones jack.'
);
