function solution(id_pw, db) {
  const agreeID = db.find((v) => v[0] === id_pw[0]);

  if (!agreeID) return "fail";

  const agreePW = agreeID[1] === id_pw[1];

  return agreePW ? "login" : "wrong pw";
}