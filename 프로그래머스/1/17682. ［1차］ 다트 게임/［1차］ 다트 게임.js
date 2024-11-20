function solution(dartResult) {
  const result = [0, 0, 0];
  const dartResults = dartResult.match(/\d+[SDT][\*\#]?/g);
  const organized = dartResults.map((d) => {
    const [_, score, bonus, option] = d.match(/^(\d+)([SDT])([\*\#]?)$/);
    return { score: parseInt(score), bonus, option };
  });

  organized.forEach((v, i) => {
    switch (v.bonus) {
      case "S":
        result[i] += v.score;
        break;

      case "D":
        result[i] += Math.pow(v.score, 2);
        break;

      case "T":
        result[i] += Math.pow(v.score, 3);
        break;
    }

    if (v.option === "*") {
      result[i] *= 2;
      if (i >= 1) {
        result[i - 1] *= 2;
      }
    }

    if (v.option === "#") {
      result[i] *= -1;
    }
  });

  return result.reduce((acc, cur) => acc + cur, 0);
}