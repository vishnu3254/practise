function sumOfElements(...array)
{
  return array.reduce((element,accumulator) => element+accumulator);
}

console.log(sumOfElements(10,20,30,40));