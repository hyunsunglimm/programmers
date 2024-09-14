const calculater = (str) => {
  const [a, cal, b, _, c] = str.split(" ");
  let result = "";

  if (cal === "+") {
    result = Number(a) + Number(b) === Number(c);
  } else {
    result = Number(a) - Number(b) === Number(c);
  }

  return result ? "O" : "X";
};

function solution(quiz) {
  return quiz.map((v) => calculater(v));
}