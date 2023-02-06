// //write a funtion to recevice a number to check whether it is a prime or not and return the result

// // function primeNumber(number) {
// //   let count = 0;
// //   for (let i = 1; i <= number; i++) {
// //     if (number % i == 0) {
// //       count++;
// //     }
// //   }
// //   if (count == 2) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // let result = primeNumber(5);
// // if (result == true) console.log("prime number");
// // else console.log("Not a prime number");

// // // Function Expression
// // let result2 = function (number) {
// //   let count = 0;
// //   for (let i = 1; i <= number; i++) {
// //     if (number % i == 0) {
// //       count++;
// //     }
// //   }
// //   if (count == 2) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };

// // if (result2(11)) console.log("prime number");
// // else console.log("not a prime number");

// // // Arrow functions
// // let result3 = (number) => {
// //   let count = 0;
// //   for (let i = 1; i <= number; i++) {
// //     if (number % i == 0) {
// //       count++;
// //     }
// //   }
// //   if (count == 2) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };

// // if (result3(15)) console.log("prime number");
// // else console.log("Not a prime number");

// //write a function to receive 2 numbers as input and print prime numbers between them

// // let isPrime = (start,end)=>{
// //   for(let i=start;i<=end;i++)
// //   {
// //     let count=0;
// //     for(let j=1;j<=i;j++)
// //     {
// //       if(i%j==0) count++
// //     }
// //     if(count==2) console.log(i);
// //   }
// // }

// // isPrime(10,30);

// let printEvenFactors = (number)=>{
//   for(let i=1;i<=number;i++)
//   {
//     if(number%i==0 && i%2==0)
//     console.log(i)
//   }
// }
// printEvenFactors(20)

let arr = [10, 20];
console.log(arr);
// adding at beginning
arr.unshift(1, 2, 4);
console.log(arr);
//adding at ending
arr.push(100);
console.log(arr);
// adding at middle
arr.splice(1, 0, 12);
console.log(arr);
//remove at beginning
arr.shift();
console.log(arr);
// remove at end
arr.pop();
console.log(arr);
// remove at specific index
arr.splice(1, 2);
console.log(arr);
// update
arr.splice(1,1,200,300)
console.log(arr);