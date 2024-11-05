function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^a-z0-9._-]/g, "") // 2
    .replace(/\.{2,}/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .padEnd(1, "a") // 5
    .slice(0, 15) // 6
    .replace(/^\.|\.$/g, "");

  return answer.padEnd(3, answer[answer.length - 1]); // 7
}