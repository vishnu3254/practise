let student = {
  serialNumber: 578,
  name: "vishnuvardhan",
  age: 21,
  marks: [87,97,100,78],
  getAggregate: function () {
    let result = this.marks.reduce((element,accumulator) => element + accumulator )
    return result/100
  },
};
console.log(student.getAggregate());
