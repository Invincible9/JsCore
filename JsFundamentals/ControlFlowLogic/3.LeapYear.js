/**
 * Created by Mihail on 9/20/2016.
 */

function leapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) ||
    (year % 400 == 0) ? "yes" : "no" ;
}

console.log(leapYear(['2000']));
