/**
 * Created by Mihail on 6/6/2017.
 */



function solve(input) {
    let map = new Map();

    for (let line of input) {
        let obj = line.split(' <-> ').filter(e => e !== '');

        if (!map.has(obj[0])) {
            map.set(obj[0], Number(obj[1]));
        } else {
            map.set(obj[0], map.get(obj[0]) + Number(obj[1]));
        }
    }
    for (let [key,value] of map) {
        console.log(key + ' : ' + value);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);