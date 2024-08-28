function solution(num_list) {
    const odd = num_list.filter((_, i) => i % 2 === 0)
    const even = num_list.filter((_, i) => i % 2 === 1)
    
    const sum = (acc, cur) => acc + cur
    
    const oddSum = odd.reduce(sum, 0)
    const evenSum = even.reduce(sum, 0)
    
    return Math.max(oddSum, evenSum)
}