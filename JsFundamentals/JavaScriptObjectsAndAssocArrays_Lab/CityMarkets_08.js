/**
 * Created by Mihail on 6/6/2017.
 */



function solve(input) {
    let map = new Map();

    for (let line of input) {
        let arr = line.split(' -> ');
        let town = arr[0];
        let productName = arr[1];
        let totalIncome = arr[2].split(' : ').reduce((e1,e2) => Number(e1) * Number(e2));

        if(!map.has(town)){
            map.set(town, new Map());
        }

        if(!map.get(town).has(productName)){
            map.get(town).set(productName, totalIncome);
        }else{
            map.get(town).set(productName, map.get(town).get(productName) + totalIncome);
        }
    }

    [...map].forEach(([key,value]) => {
        console.log(`Town - ${key}`);
        [...value].forEach(([k,v]) => {
            console.log(`$$$${k} : ${v}`);
        })
    });

    // for (let [key,value] of map) {
    //     console.log(`Town - ${key}`);
    //     for (let [k, v] of value) {
    //         console.log(`$$$${k} : ${v}`);
    //     }
    // }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);