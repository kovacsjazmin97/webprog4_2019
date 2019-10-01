var counter=0;
var increase = () => {counter++};
var decrease = () => {counter--};
var counter = () => {return counter;};
module.exports = {
    inc: increase,
    dec: decrease,
    val: counter
};