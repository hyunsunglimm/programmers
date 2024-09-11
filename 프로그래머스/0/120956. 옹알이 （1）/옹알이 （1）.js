const solution = (babbling) => {
  let count = 0
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(v => {
    if (regex.test(v)) count++
  })

  return count
}