/**
 * Created by Mihail on 6/3/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input, delimiter) {
    let pattern = `\\b${delimiter.toLowerCase()}\\b`;
    let matcher = new RegExp(pattern, 'g');
    let result = [];
    input = input.toLowerCase();
    let match;

    while (match = matcher.exec(input)) {
        result.push(matcher[0]);
    }
    console.log(result.length)
}

solve('The waterfall was so high, that the child couldn’t see its peak.',
    'e'
);

solve('The waterfall was so high, that the child couldn’t see its peak.',
    'the'
);

solve('How do you plan on achieving that? How? How can you even think of that?',
    'how'
);

solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
    'there'
);
