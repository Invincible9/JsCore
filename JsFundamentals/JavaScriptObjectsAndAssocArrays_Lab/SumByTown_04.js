/**
 * Created by Mihail on 6/5/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i+=2) {
        let town = input[i];
        let income = Number(input[i+1]);

        if(!obj.hasOwnProperty(town)){
            obj[town] = income;
        }else{
            obj[town] += income;
        }
    }

    console.log(JSON.stringify(obj));
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4',
]);

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4'
]);