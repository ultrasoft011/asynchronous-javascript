// Create a new promise using a promise constructor
// new Promise() takes one argument: the executer function
const simplePromise = new Promise(function (resolve, reject) {
  console.log('The promise is running');
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve('You win!');
    } else {
      reject('You lose your money');
    }
  }, 3000);
});

simplePromise.then(res => console.log(res)).catch(err => console.log(err));
