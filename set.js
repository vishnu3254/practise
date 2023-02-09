let set = new Set()

set.add({a:10})
set.add({b:5})
set.add({c:2})


console.log(set);
set.delete(5)

console.log(set);

set.forEach(element =>{
  if(element.b == 5) set.delete(element)
})
console.log(set);