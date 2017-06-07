/**
 * Created by Mihail on 5/26/2017.
 */

/**
 *
 * @param str {string}
 */

function wordUppercase(str) {

    let strUpper = str.toUpperCase();
    let text = strUpper.split(/\W+/);

    str.toLowerCase();

    console.log(text.filter(e => e != '').join(", "));

}

wordUppercase('Hi, how are you?');
wordUppercase('hello');