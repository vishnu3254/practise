function Test() {
  let a = 100;
  return function test1() {
      return a+100
  };
}
let result = Test();
let result1 = result()
console.log(result1());
