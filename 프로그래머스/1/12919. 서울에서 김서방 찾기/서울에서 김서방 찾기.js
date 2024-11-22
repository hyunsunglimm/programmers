function solution(seoul) {
  let result;
  seoul.forEach((person, i) => {
    console.log(person === "Kim");
    if (person === "Kim") {
      result = `김서방은 ${i}에 있다`;
      return;
    }
  });
  return result;
}