// let vals = [5, 4, 1, 2, 9];

// function sum(acc, val) {
//     return acc + val;
// }

// let answer = vals.reduce(sum, 10);

// console.log(answer);

        // NOW A CONDENSED VERSION OF THE CODE


// let vals = [5, 4, 1, 2, 9];

// let sum = vals.reduce((acc, val) => acc + val);

// console.log(sum);

          // HERE IS A FIND MAX REDUCE FUNCTION

let vals = [5, 4, 1, 2, 9];

function findMax(acc, val) {
    if (val > acc) {
        acc = val;
    }
    return acc;
}
let biggest = vals.reduce(findMax);

console.log(biggest);

