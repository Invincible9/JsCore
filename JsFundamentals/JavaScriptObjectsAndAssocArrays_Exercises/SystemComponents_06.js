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
            map.get(arr[0]).set(arr[1], []);
        }
        map.get(arr[0]).get(arr[1]).push(arr[2]);
    }

    let sortedSystem = [...map.keys()].sort().sort((e1, e2) => [...map.get(e2).keys()].length - [...map.get(e1).keys()].length);

    sortedSystem.forEach(key => {
        console.log(key);
        [...map.get(key).keys()].sort((e1, e2) => map.get(key).get(e2).length - map.get(key).get(e1).length).forEach(k => {
            console.log(`|||${k}`);
            [...map.get(key).get(k)].forEach(e => {
                console.log(`||||||${e}`);
            })
        })
    })

}
solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);