/**
 * Created by Mihail on 6/3/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {

    let result = [];
    for (let ar of input) {
        let pattern = ar.match(/(www)\.([A-Za-z0-9\-]+)(\.[a-z]+)+/g);
        result.push(pattern);
    }
    console.log(result.filter(x => x !== null).join('\n'));
}

solve(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]);
