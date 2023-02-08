let isProjectCompleted = true;
let getHiked = true;

let promiseObj = new Promise((resolved, rejected) => {
  setTimeout(() => {
    isProjectCompleted
      ? resolved("Project is completed")
      : rejected("project is not yet completed");
  }, 5000);
});

let promiseObj2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    getHiked ? resolved("I got hike") : rejected("I didn't get hike");
  }, 8000);
});

promiseObj
  .then((message) => {
    console.log(message);
    return promiseObj2;
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });