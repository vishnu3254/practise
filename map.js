let array = [9, 10, 45, 78, 34, 15];
let newArray = array.map((element) => {
  if (element < 10) return element + 5;
  else if (element > 21 && element < 30) return element + 7;
  else if (element > 30) return element + 10;
  else return element;
});
console.log(newArray);
