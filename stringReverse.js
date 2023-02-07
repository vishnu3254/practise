function getReverse(givenString) {
  let result=""
  for (let index = givenString.length-1; index >= 0; index--) {
      result += givenString.at(index);
  }
  return result
}

console.log(getReverse("good morning")) ;
