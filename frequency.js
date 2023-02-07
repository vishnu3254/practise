let givenString = "aaabbabababababababbaaaaccddeeeedd"
let aCount=0
let bCount=0
// for(let index=0;index<givenString.length;index++)
// {
//   if(givenString.charAt(index) == 'a')
//     aCount++
//   if(givenString.charAt(index) == 'b') bCount++
// }
// console.log("Count of a is",aCount);
// console.log("Count of b is",bCount);

let frequency ={}

// let stringArray = givenString.split("").filter(element => {
  
//     if(element == 'a') aCount++
//     if(element == 'b') bCount++

// })
let stringArray = givenString.split("").filter(element => {
  

  if(element in frequency)
    frequency[element] = frequency[element]+1
  else
    frequency[element]= 1

})
console.log(frequency);
// console.log("Count of a is",aCount);
// console.log("Count of b is",bCount);