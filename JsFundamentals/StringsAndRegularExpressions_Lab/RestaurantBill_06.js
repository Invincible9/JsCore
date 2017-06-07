/**
 * Created by Mihail on 6/1/2017.
 */

/**
 *
 * @param input {[string]}
 */

function solve(input) {
    let names = [];
    let sum = 0;
    input.filter((e,i) => i % 2 === 0 ? names.push(e) : sum += Number(e));
    console.log(`You purchased ${names.join(', ')} for a total sum of ${sum}`);
}


solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
solve(['Cola', '1.35', 'Pancakes', '2.88']);
