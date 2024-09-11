function solution(n) {
    const arr = []
    let num = n
    
    while (num > 0) {
        if (num % 2) {
            arr.push(num)
        }
        num--
    }
    
    return arr.sort((a,b) => a - b)
}