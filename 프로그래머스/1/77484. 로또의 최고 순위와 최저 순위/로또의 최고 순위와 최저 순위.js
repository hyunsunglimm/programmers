function solution(lottos, win_nums) {
  const unvarifiableNumber = lottos.filter((v) => v === 0).length;
  const agreementNumber = lottos.filter((v) => win_nums.includes(v)).length;

  return [
    Math.min(7 - (unvarifiableNumber + agreementNumber), 6),
    Math.min(7 - agreementNumber, 6),
  ];
}