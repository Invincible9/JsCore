/**
 * Created by Mihail on 5/31/2017.
 */

/**
 *
 * @param input {[string]}
 */

function countStringInText(str, text) {

    let count = 0;
    let index = text.indexOf(str);

    while (index !== -1) {
        count++;
        index = text.indexOf(str, index + 1);
    }
    return count;
}

console.log(countStringInText('the', 'The quick brown fox jumps over the lay dog.'));
console.log(countStringInText('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));