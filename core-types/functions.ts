/*****************************
  Function types and callback
******************************/
export {};

function add(n1: number, n2: number) {
  return n1 + n2;
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

let combineValue: (x: number, y: number) => number; // it's not arrow function
combineValue = add;

console.log(combineValue(3, 4));

addAndHandle(11, 2, (result) => {
  console.log(result);
});
