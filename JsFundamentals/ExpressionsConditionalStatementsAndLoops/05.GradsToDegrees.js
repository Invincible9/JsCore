/**
 * Created by Mihail on 9/21/2016.
 */

function solve(grads) {
    // grads = Number(grads);

    grads = grads % 400;
    grads += 400;
    grads = grads % 400;
    // if(grads < 0){
    //     grads += 400;
    // }

    let degrees = grads * 0.9;

    console.log(degrees);
}

solve(['100']);