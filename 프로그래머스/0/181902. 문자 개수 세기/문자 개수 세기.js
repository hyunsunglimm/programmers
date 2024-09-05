const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const lowerCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
const alphabet = [...upperCase, ...lowerCase]

function solution(my_string) {
    const arr = []
    alphabet.forEach(v => arr.push(my_string.split(v).length - 1))
    
    return arr
}