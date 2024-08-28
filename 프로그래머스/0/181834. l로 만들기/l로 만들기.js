const isPrecedeL = (alphabet) => {
  return ["l", alphabet].sort()[1] === "l" ? true : false;
};

function solution(myString) {
  return myString
    .split("")
    .map((v) => (isPrecedeL(v) ? "l" : v))
    .join("");
}