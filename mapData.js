let map = new Map()

map.set(1,2)
map.set({a:10},"hello")



map.set(4,3)
console.log(map);

// map.clear()


console.log(map)

// to find size
console.log(map.size);

//to get value by the key
// console.log(map.get({a:10}))

console.log(map.keys());// map.keys()

console.log(map.values());

console.log(map.entries());

map.forEach(element => {
  console.log(element);
})