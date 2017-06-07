/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
    let map = new Map();

    for (let arr of input) {
        if (!map.has(arr.charAt(0))) {
            map.set(arr.charAt(0), [])
        }
        map.get(arr.charAt(0)).push(arr);
    }

    [...map].sort().forEach(([key,value]) => {
        console.log(key);
        [...value].sort().forEach(e => {
            console.log(`  ${e.replace(' :', ':')}`);
        });
    });
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);