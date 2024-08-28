const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const number = parseInt(line)
    const judge = number % 2 ? 'odd' : 'even'
    console.log(`${number} is ${judge}`)
})