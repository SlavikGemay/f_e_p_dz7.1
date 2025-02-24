"use strict";


const sum = getSumNumbers();
function getSumNumbers(number) {
    let sum = 0;
    return numberSum => (sum += numberSum);
}

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));


// const getSumNumbers = () => {
//     let sum = 0;
//     return numberSum => (sum += numberSum);
// }
// const sum = getSumNumbers();
// console.log(sum(4));
// console.log(sum(6));
// console.log(sum(10));
// console.log(sum(7));