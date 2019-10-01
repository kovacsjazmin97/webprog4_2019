class Counter {
    cnt=0;
    construktor(cnt_init) {

    }
}
var cnt=0;
var increase = () => {cnt++};
var decrease = () => {cnt--};
var counter = () => {return cnt;};

module.exports: Counter;
};