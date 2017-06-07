/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
    let map = new Map();

    let bottles = new Set();

    for (let line of input) {
        let arr = line.split(' => ');

        if (!map.has(arr[0])) {
            map.set(arr[0], Number(arr[1]));
        } else {
            map.set(arr[0], Number(map.get(arr[0])) + Number(arr[1]));
        }

        if (Number(map.get(arr[0])) >= 1000) {
            bottles.add(arr[0]);
        }
    }

    [...bottles].forEach(e => {
        console.log(`${e} => ${Number(Math.floor(map.get(e) / 1000))}`);
    });

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);