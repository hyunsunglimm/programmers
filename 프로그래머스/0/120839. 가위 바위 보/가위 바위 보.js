function solution(rsp) {
    return [...rsp].map(v => v === '2' ? '0' : v === '5' ? '2' : '5').join('')
}