/**
 * Created by Mihail on 6/5/2017.
 */

/**
 *
 * @param input {[string]}
 */

function townToJson(input) {

    input = input.splice(1);

    let arr = [];
    for (let line of input) {
        arr.push(line.split('|').filter(e => e !== '').map(e => e.trim()));
    }

    let result = [];
    for (let items of arr) {
        let objects = {"Town": items[0], "Latitude": Number(items[1]), "Longitude": Number(items[2])};
        result.push(objects);
    }
    console.log(JSON.stringify(result));
}

townToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

townToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);

