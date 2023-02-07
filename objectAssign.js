let obj = {
  a: 10,
  b: 20,
};

let copyObj = Object.assign({}, obj);
console.log(obj);
console.log(copyObj);
obj.c = 10;
console.log(obj);
console.log(copyObj);

console.log(obj == copyObj);

let newCopyObj = { ...obj };

obj.d = 11;
console.log(obj);
console.log(newCopyObj);

console.log(obj == newCopyObj);

let array = [1, 2, 3, 4];

let copyArray = [...array];
console.log(array);
console.log(copyArray);

console.log(array == copyArray);
