function solution(num, k) {
    const idx = [...String(num)].findIndex(v => Number(v) === k)
    
    return idx === -1 ? -1 : idx + 1
}