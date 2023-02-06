let arr = [1,4,2,5,0,99,-1,100,0,-111];
let minimum=99999;
let maximum = 0;
for(let element of arr)
{
  if(element <minimum)
    minimum = element
  if(element > maximum)
    maximum = element
}
console.log("Minimum number is ",minimum);
console.log("Maximum number is ",maximum);
