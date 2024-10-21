function solution(babbling) {
  const babblings = ["aya", "ye", "woo", "ma"];
  
  return babbling.filter((word) => {
    let prev = "";
    let temp = word;

    while (temp) {
      const found = babblings.find((b) => temp.startsWith(b) && b !== prev);

      if (found) {
        temp = temp.slice(found.length);  // 발음이 맞으면 그 길이만큼 자름
        prev = found;  // 이전 발음 업데이트
      } else {
        return false;  // 적합한 발음이 없으면 false
      }
    }

    return true;  // 모든 발음이 규칙에 맞으면 true
  }).length;
}
