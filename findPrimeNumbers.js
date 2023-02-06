let arr = [1, 2, 4, 5, 6, 7, 9];
let newArr = [];
for (let element of arr) {
  let count = 0;
  for (let num = 1; num <= element; num++) {
    if (element % num == 0) count++;
  }
  if (count == 2) {
    console.log(element, " is prime");
    newArr.push(element);
  }
}
console.log(newArr);
