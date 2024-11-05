function solution(survey, choices) {
  const result = {
    RT: 0,
    CF: 0,
    JM: 0,
    AN: 0,
  };

  survey.forEach((s, index) => {
    if (s in result) {
      result[s] += choices[index] - 4;
    } else {
      result[s.split("").reverse().join("")] -= choices[index] - 4;
    }
  });

  return Object.keys(result)
    .map((key) => (result[key] > 0 ? key[1] : key[0]))
    .join("");
}