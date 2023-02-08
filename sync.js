let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")

function heavyOperations(){
  setTimeout(()=>{
    console.log("Finally Executed!!");
  },10000)
  console.log("Helloo");
}

btn1.addEventListener('click',heavyOperations)