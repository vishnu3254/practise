let condition = false

let promiseObj = new Promise((resolved,rejected)=>{

  setTimeout(()=>{
    if(condition === true)
      resolved("Hey hi")
    else rejected("sorry call you later")
  },5000)

})

//consumer

promiseObj
.then((message)=>{
  console.log("Message from then",message);
})
.catch((err)=>{
  console.log("Message from catch",err);
})

