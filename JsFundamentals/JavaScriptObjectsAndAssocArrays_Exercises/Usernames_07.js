/**
 * Created by Mihail on 6/6/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
    let uniqueWords = new Set();

    for (let words of input) {
        uniqueWords.add(words);
    }

    let sortedNames = [...uniqueWords].sort((a, b) =>  {
        if (a.length !== b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });

    sortedNames.forEach(e => {
        console.log(e);
    })
}

// solve(['Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston'
// ]);

solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);