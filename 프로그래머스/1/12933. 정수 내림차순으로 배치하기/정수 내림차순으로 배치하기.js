function solution(n) {
    return parseInt([...n.toString()].sort((a,b) => parseInt(b) - parseInt(a)).join(''))
}