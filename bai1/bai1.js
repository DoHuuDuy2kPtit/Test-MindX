// Problem Solving
// Ex 1

function checkDivideByTwo(num) {
  return num % 2 == 0;
}

function divideByTwo(arr, f) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (f(i)) newArr.push(i);
  }
  return newArr;
}

let input = prompt("Nhập vào 1 dãy số nguyên và ngăn cách nhau bởi dấu ','");

let inputArr = input.split(",");

console.log(inputArr);

let arr = inputArr.map((value) => {
  return Number(value);
});

console.log(arr);

console.log(divideByTwo(arr, checkDivideByTwo));

