// console logs will be executed by syncronous
console.log('test start');
// The setTimeOut will be executed last
setTimeout(() => console.log('0 timer', 0 ));
// The promise will be resolve first due to the microtask queue
Promise.resolve('Solved').then(res => {
    console.log(res);
})
console.log('test done');