console.log('JS OK')

let message = '';

for (let i = 1; i <= 100; i++) {
console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        message = 'FizzBuzz';
        console.log (message)
    } else if (i % 3 === 0) {
        message = 'fizz';
        console.log(message)
    } else if (i % 5 === 0) {
        message = 'buzz';
        console.log(message)
    }

}