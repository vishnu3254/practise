
function Employee(name,age,basic){
  this.name = name
  this.age = age
  this.basic = basic

}

Employee.prototype.getSalary = function(){
  let hra = 0.15*this.basic
  let da = 0.2 * this.basic
  let salary = this.basic + hra+da
  return salary

}

let emp1 = new Employee("vishnu",21,1000)
let emp2 = new Employee("ravi",22,15000)
let emp3 = new Employee("suresh",27,20000)
let emp4 = new Employee("ramesh",22,17000)
let emp5 = new Employee("vardhan",22,21000)

console.log(emp1.getSalary());
console.log(emp2.getSalary());
console.log(emp3.getSalary());
console.log(emp4.getSalary());
console.log(emp5.getSalary());