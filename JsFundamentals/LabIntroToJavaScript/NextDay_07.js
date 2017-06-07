/**
 * Created by Mihail on 5/24/2017.
 */

function calcNextDay(year, month, day)  {
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" +
        (nextDate.getMonth() + 1) + '-' +
        nextDate.getDate();
}

console.log(calcNextDay(2016, 9, 30));