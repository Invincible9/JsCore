/**
 * Created by Mihail on 5/25/2017.
 */

function solve(args) {
    let n = Number(args);

    if(n == 2) {
        console.log("+++")
    }else if(n <= 4){
        if(n % 2 == 0){
            for(let i = 0; i < n-1; i++){
                console.log("+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+");
            }
        }else{
            for(let i = 0; i < n; i++){
                console.log("+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+");
            }
        }
    }
    else if (n > 4){
        console.log("+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+");

        let num = Math.floor((n-3)/2);
        for(let i = 0; i < num; i++){
            console.log("|" + " ".repeat(n-2) + "|" + " ".repeat(n-2) + "|");
        }

        console.log("+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+");

        for(let i = 0; i < num; i++){
            console.log("|" + " ".repeat(n-2) + "|" + " ".repeat(n-2) + "|");
        }

        console.log("+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+");
    }
}