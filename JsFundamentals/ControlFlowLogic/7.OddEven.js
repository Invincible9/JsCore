/**
 * Created by Mihail on 9/20/2016.
 */


function oddEven(input) {
    let num = Number(input) % 2;

    if (num == 0){
        console.log("even")
    }else if(num == Math.round(num)){
        console.log("odd")
    }else {
        console.log("invalid")
    }
}

oddEven(['-3']);