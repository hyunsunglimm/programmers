const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const number = parseInt(line)
    const judge = number % 2 === 0 ? 'even' : 'odd'
    console.log(`${number} is ${judge}`)
}).on('close', function () {
    n = Number(input[0]);
});