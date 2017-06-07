/**
 * Created by Mihail on 6/7/2017.
 */

/**
 *
 * @param input {string}
 */

function solve(number) {
    let days = 0;
    let sum = 0;
    while (number >= 100){
        sum += Number(number) - 26;
        days++;
        number-=10;
    }

    if(sum >= 26) {
        sum -= 26;
    }
    console.log(days);
    console.log(sum);
}

solve(111);
