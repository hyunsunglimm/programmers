function solution(money) {
    const quantity = Math.floor(money / 5500)
    return [quantity, money - quantity * 5500]
}