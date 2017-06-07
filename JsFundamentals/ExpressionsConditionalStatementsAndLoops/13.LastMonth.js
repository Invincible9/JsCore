/**
 * Created by Mihail on 9/21/2016.
 */


function solve([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    let date = new Date(year, month - 1, 0);

    console.log(date.getDate());
}