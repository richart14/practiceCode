'use strict';

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 26, 2];
const smallAges = [3, 12, 20, 2, 1];
const string = ['word', 'hello', 'ma'];
// const canDrink = ages.filter((age)=>age%3===0?true:false);
// console.log(canDrink);
function test(string) {
  // works fine for smallAges but confused about ages
  const sortOnesPlace = string.sort(function (a, b) {
    console.log(`comparing ${a},${b} to ${a - b}`);
    return a - b;
  });
}
console.log(sortOnesPlace);
// let ageSorter = smallAges.sort((a, b) => {
//   console.log(`comparing ${a},${b}`);
//   return a > b ? 1
//     : a === b ? 0
//       : -1;
// });
// console.log(ageSorter);

