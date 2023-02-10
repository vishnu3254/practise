let set = new Set()

set.add({a:10})
set.add({b:5})
set.add({c:2})

set.add(5)
console.log(set);

console.log(set);

set.forEach(element =>{
  if(element.b == 5) set.delete(element)
})
console.log(set);

console.log(set.has(5));
console.log(
  set.values()
);
console.log(set.keys());

console.log(set.entries());