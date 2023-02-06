let array = [10, 20, 30, 40, 50];
let newArray = [];
for (let element of array) {
  if (element < 30) {
    newArray.push(element);
  }
}
console.log(newArray);
