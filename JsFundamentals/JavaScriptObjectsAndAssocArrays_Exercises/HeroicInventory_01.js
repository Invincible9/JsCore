/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {

    let result = [];

    for (let line of input) {
        let arr = line.split(' / ');

        let obj = {
            name: arr[0],
            level: Number(arr[1]),
            items: arr[2] !== undefined ? arr[2].split(', ') : []
        };
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);