/**
 * Created by Mihail on 6/3/2017.
 */

function solve(input) {

    input.forEach(elem => {
        let patternNameClient = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)/g;
        let patternPhoneNumber = /(\+[0-9-]{10})(?= |\t|$)/g;
        let patternIDs = /(![0-9a-zA-Z]+)(?= |\t|$)/g;
        let patternSecretBasesNames = /(_[0-9a-zA-Z]+)(?= |\t|$)/g;

        elem = elem.replace(patternNameClient, (x => '|'.repeat(x.length)));
        elem = elem.replace(patternPhoneNumber, (x => '|'.repeat(x.length)));
        elem = elem.replace(patternIDs, (x => '|'.repeat(x.length)));
        elem = elem.replace(patternSecretBasesNames, (x => '|'.repeat(x.length)));

        console.log(elem)
    });
}

function solve(input) {
    let allPattern = (/(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g);

    let result = [];
    for(let ar of input){
        console.log(ar.replace(allPattern, (x => '|'.repeat(x.length))));
    }
    console.log(result.join());
}

solve(["Agent *Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.",
    "Agent *Ivankov had to act quick in order.",
    "He picked up his phone and called some unknown number.",
    "I think it was +555-49-796",
    "I can't really remember...",
    "He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "As if he vanished in the shadows.",
    "A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "I really don't know what happened there.",
    "This is all I saw, that night.",
    "I cannot explain it myself..."
]);