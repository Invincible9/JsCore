/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
    let map = new Map();

    for (let line of input) {
        let arr = line.split(' | ');

        if (!map.has(arr[0])) {
            map.set(arr[0], new Map());
        }

        if (!map.get(arr[0]).has(arr[1])) {
            map.get(arr[0]).set(arr[1], Number(arr[2]));
        } else {
            map.get(arr[0]).set(arr[1], map.get(arr[0]).get(arr[1]) + Number(arr[2]));
        }
    }

    [...map].forEach(([key, val]) => {
        console.log(key);
        [...val].forEach(([k, v]) => {
            console.log(`###${k} -> ${v}`);
        })
    })

}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);