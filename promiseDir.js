let releaseMovieConditon = false;

//creating promise

let promiseObj = new Promise((resolved, rejected) => {
  setTimeout(() => {
    releaseMovieConditon
      ? resolved("Hey movie is released")
      : rejected("Due to some technical issue we are unale to release");
  }, 5000);
});


//consuming from fans

promiseObj
.then((message)=>{
  console.log("Message from then",message);
})
.catch((err)=>{
  console.log("Message from catch",err);
})