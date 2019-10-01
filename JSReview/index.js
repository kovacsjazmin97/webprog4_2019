console.log('Hello World');
const calculator = require('./Calculator');
const Counter1= require('./Counter');
const Counter2= require('./Counter');

console.log(calculator.add(5,3));
console.log(calculator.mul(5,3));
console.log(calculator.div(5,3));

console.log("counter1"+Counter1.val());
Counter1.inc();
Counter1.inc();
console.log("counter1"+Counter1.val());

console.log("counter1"+Counter2.val());
Counter2.inc();
Counter2.inc();
console.log("counter1"+Counter2.val());