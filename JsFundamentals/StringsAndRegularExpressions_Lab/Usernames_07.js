/**
 * Created by Mihail on 6/1/2017.
 */

/**
 *
 * @param input {[string]}
 */

function extractUsernames(inputEmails) {
    let results = [];
    for (let email of inputEmails) {
        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        results.push(username);
    }
    console.log(results.join(', '));
}

extractUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);

// function solve(input) {
//
//     let result = [];
//
//     for (let line of input) {
//         let name = line.substr(0, line.indexOf('@'));
//         let firstLetter = line.substr(line.indexOf('@') + 1, 1);
//
//         let otherLetter = line.substr(line.indexOf('.') + 1).split('.');
//         let secondStr = '';
//         for (let i = 0; i < otherLetter.length; i++) {
//             secondStr += otherLetter[i][0];
//         }
//          result.push(name + '.' + firstLetter + secondStr);
//     }
//     console.log(result.join(', '));
// }