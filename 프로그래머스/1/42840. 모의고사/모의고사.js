function solution(answers) {
  const rules = ["12345", "21232425", "3311224455"];
  const scores = [0, 0, 0];

  rules.forEach((rule, idx) => {
    const extendedRule = rule.repeat(Math.ceil(answers.length / rule.length));
    answers.forEach((answer, i) => {
      if (answer.toString() === extendedRule[i]) scores[idx]++;
    });
  });

  const maxScore = Math.max(...scores);
  
  return scores
    .map((score, i) => [i + 1, score])
    .filter(([, score]) => score === maxScore)
    .map(([user]) => user)
    .sort((a, b) => a - b);
}