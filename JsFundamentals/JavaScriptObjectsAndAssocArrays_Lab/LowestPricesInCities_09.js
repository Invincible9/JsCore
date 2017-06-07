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
        let arr = line.split(' | ').filter(e => e !== '');
        let townName = arr[0];
        let productName = arr[1];
        let productPrice = Number(arr[2]);

        if (!map.has(productName)) {
            map.set(productName, new Map());
        }
        map.get(productName).set(townName, productPrice);
    }

    for (let [towns, products] of map) {
        let str = `${towns} -> `;
        let productName = '';
        let minValue = Number.MAX_VALUE;
        for (let [key,value] of products) {
            if(minValue > value){
                minValue = value;
                productName = key;
            }
        }
        str += `${minValue} (${productName})`;
        console.log(str);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);