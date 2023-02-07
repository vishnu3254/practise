let givenString = "Good morning to all of you"
let noOfChars=0
let stringArray = givenString.split(" ")
stringArray.forEach(word => {
  console.log(word," ", word.length)
  noOfChars += word.length
})
noOfChars += stringArray.length-1
console.log("Total number of characters",noOfChars);
console.log("Total number of words is ",stringArray.length)

