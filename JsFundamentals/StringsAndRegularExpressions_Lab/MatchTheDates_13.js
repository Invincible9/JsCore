/**
 * Created by Mihail on 6/2/2017.
 */

/**
 *
 * @param input {string}
 */

// function matchDates(input) {
//     for (let line of input) {
//         let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/;
//
//         let regex = new RegExp(pattern, 'g');
//         let matcher = regex.exec(line);
//
//         if(matcher === null){
//             continue;
//         }
//         console.log(`${matcher[0]} (Day: ${matcher[1]}, Month: ${matcher[2]}, Year: ${matcher[3]})`)
//     }
// }


function extractDates(inputSentences) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], match;

    for (let sentence of inputSentences) {
        while (match = pattern.exec(sentence)) {
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
    console.log(dates.join("\n"));
}

// matchDates(['I am born on 30-Dec-1994.',
//     'This is not date: 512-Jan-1996.',
//     'My father is born on the 29-Jul-1955.'
// ]);

extractDates(['1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.'
]);