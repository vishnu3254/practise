let Emp = {
  eno: 100,
  username: "ravi",
  skills: ["java", "ReactJs"],
  address: {
    street: "miyapur",
    city: "hyderabad",
  },
};

let copyObj = { ...Emp };

console.log(Emp);
console.log(copyObj);

console.log(Emp.address == Emp.address, " so it is shallow copy"); // referecing to same address

let newCopyObj = JSON.parse(JSON.stringify(Emp));

console.log(newCopyObj.address == Emp.address, " so it is deep copy");
