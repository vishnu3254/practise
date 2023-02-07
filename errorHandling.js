try {
  let result = 5/0;
  if(result == Infinity)
  {
    throw new Error("Zero division Error")
  }
} 
catch (err) {
  console.error(err.message);
}
finally {
  console.log("finally ");
}
