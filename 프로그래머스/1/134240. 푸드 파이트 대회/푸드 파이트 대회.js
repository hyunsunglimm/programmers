function solution(food) {
  let res = "";
  food.forEach((v, i) => {
    res += String(i).repeat(Math.floor(v / 2));
  });
  return res + "0" + [...res].reverse().join("");
}