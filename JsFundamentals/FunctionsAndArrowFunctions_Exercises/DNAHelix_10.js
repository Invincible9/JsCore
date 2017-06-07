/**
 * Created by Mihail on 6/2/2017.
 */

function solve(input) {

    let num = Number(input);
    let str = "ATCGTTAGGG";
    let currentIndex = 0;

    for(let i = 0; i < num; i++){
        let currentRow = i % 4;

        if(currentRow === 0){
            console.log(`**${str[currentIndex++ % str.length]}${str[currentIndex++ % str.length]}**`);
        }else if(currentRow === 1 || currentRow === 3){
            console.log(`*${str[currentIndex++ % str.length]}--${str[currentIndex++ % str.length]}*`);
        }else{
            console.log(`${str[currentIndex++ % str.length]}----${str[currentIndex++ % str.length]}`);
        }
    }
}

solve(17);