function solution(n) {
    const arr = []
    let num = n
    
    while (num > 0) {
        if (num % 2 === 0) {
            arr.push(num)
        }
        num--
    }
    
    return arr.reduce((acc,cur) => acc + cur, 0)
}