let obj = {
  username: "vishnu123",
  age: 12,
};

let copyObj = obj;

console.log(obj);
console.log(copyObj);

obj.c = 100;
console.log(obj);
console.log("copy", copyObj);
