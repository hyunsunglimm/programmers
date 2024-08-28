function solution(myString, pat) {
    const newString = myString.split('').map(v => v === 'A' ? 'B' : 'A').join('')
    return newString.includes(pat) ? 1 : 0
}