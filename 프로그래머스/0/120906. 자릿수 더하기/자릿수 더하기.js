function solution(n) {
    return [...String(n)].map(v => Number(v)).reduce((a,b) => a + b, 0)
}