let students = [
  {
    name: "ravi",
    age: 20,
  },
  {
    name: "bhanu",
    age: 30,
  },
  {
    name: "kiran",
    age: 26,
  },
  {
    name: "madhu",
    age: 37,
  },
  {
    name: "vikas",
    age: 30,
  },
];

// a.Get students whose age between 20 & 30
//b. Find student with name “Aakash”
let newArray = students.filter(
  (element) => element.age > 20 && element.age < 30
);
console.log(newArray);

let searchStudent = students.find((element) => element.name == "Aakash");

searchStudent ? console.log(searchStudent) : console.log("Not Found");
