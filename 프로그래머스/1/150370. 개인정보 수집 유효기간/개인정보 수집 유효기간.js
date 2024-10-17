const getExp = (date, term) => {
  const [year, month, second] = date.split(".");

  const monthSum = Number(month) + term;

  const newMonth = monthSum % 12 === 0 ? 12 : monthSum % 12;
  const newYear =
    monthSum % 12 === 0
      ? Number(year) + Math.floor(monthSum / 12) - 1
      : Number(year) + Math.floor(monthSum / 12);

  return `${newYear}.${
    newMonth.toString().length === 1 ? "0" + newMonth : newMonth
  }.${second}`;
};

function solution(today, terms, privacies) {
  const newTerm = terms.reduce((acc, cur) => {
    const [key, value] = cur.split(" ");
    acc[key] = +value;
    return acc;
  }, {});

  const newPrivacies = privacies.map((p) => {
    const [date, type] = p.split(" ");
    const expDate = getExp(date, newTerm[type]);

    return Date.parse(today) - Date.parse(expDate) >= 0 ? "파기O" : "파기X";
  });

  return newPrivacies
    .map((p, i) => (p === "파기O" ? i + 1 : -1))
    .filter((p) => p > -1);
}