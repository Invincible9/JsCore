/**
 * Created by Mihail on 5/26/2017.
 */

// function aggregateElements(arr) {
//     let sum = 0;
//     let sumInverse = 0;
//     let text = "";
//
//     for (let obj of arr) {
//         sum += Number(obj);
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         let divide = 1 / Number(arr[i]);
//         sumInverse += divide;
//     }
//
//     for (let obj of arr) {
//         text += obj.toString();
//     }
//
//     console.dir(arr);
//     console.dir(sumInverse);
//     console.dir(Number(text));
// }


function aggregateElements(arr) {

    function aggregate(elements, start, func) {
        for (let e of elements) {
            start = func(start, e);
        }
        return start;
    }

    console.log(aggregate(arr, 0, (a, b) => a + b));
    console.log(aggregate(arr, 0, (a, b) => a + 1 / b));
    console.log(aggregate(arr, '', (a, b) => a + b));
}

aggregateElements([1, 2, 3]);