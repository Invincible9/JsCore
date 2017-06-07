/**
 * Created by Mihail on 6/1/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(input) {
  input = input.replace(/\W+/g, '|');

  let index = input.indexOf('\|', input.length - 1);

  if(index !== -1){
      console.log(input.substring(0, input.length - 1));
  }else{
      console.log(input);
  }
}

function matchAllWords(text) {
    let result = text.match(/\w+/g);
    return result.join('|');
}

solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords('A #%^ lo^#^t of@%*symbols(@i@%~n~)`this......sentence...123456789*&%#0:"">>?:{{!@#@@#$%The+_)(*&^%$#@!End.');