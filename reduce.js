let array = [1, 2, 3, 4];
let minimum = array.reduce((element, accumulator) => {
  return element < accumulator ? element : accumulator;
});
let maximum = array.reduce((element, accumulator) => {
  return element > accumulator ? element : accumulator;
});

console.log(minimum, maximum);
