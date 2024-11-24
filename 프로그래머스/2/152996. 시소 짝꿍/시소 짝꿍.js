function solution(weights) {
  const weightMap = new Map();
  let answer = 0;

  // 몸무게 빈도 계산
  for (const weight of weights) {
    weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
  }

  // 몸무게를 순회하며 짝 계산
  for (const [weight, count] of weightMap) {
    // 같은 몸무게 끼리 균형을 이루는 경우 (1:1)
    if (count > 1) {
      answer += (count * (count - 1)) / 2;
    }

    // 다른 비율로 균형을 이루는 경우
    const ratios = [3 / 2, 4 / 3, 2];
    for (const ratio of ratios) {
      const pairedWeight = weight * ratio;
      if (weightMap.has(pairedWeight)) {
        answer += count * weightMap.get(pairedWeight);
      }
    }
  }

  return answer;
}