let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let ref1 = setInterval(()=>{
  console.log("From Interval 1");
},2000)

let ref2 = setInterval(()=>{
  console.log("From Interval 2");
},4000)

function stopInterval1(){
  clearInterval(ref1);
}


function stopInterval2(){
  clearInterval(ref2);
}
btn1.addEventListener('click',stopInterval1)
btn1.addEventListener('click',stopInterval2)