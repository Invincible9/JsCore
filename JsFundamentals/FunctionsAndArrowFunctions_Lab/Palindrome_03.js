/**
 * Created by Mihail on 5/26/2017.
 */

function palindrome(word) {
    for (let i = 0; i < word.length / 2; i++)
        if (word[i] != word[word.length - 1 - i])
            return false;
    return true;
}

console.log(palindrome('racecar'));