function solution(s, n) {
  return [...s].map((v) => (v === " " ? " " : nextAlphabet(v, n))).join("");
}

function nextAlphabet(current, step) {
  const isUpperCase = current >= "A" && current <= "Z";

  const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
  const alphabetCount = 26;

  const currentIndex = current.charCodeAt(0) - base;

  const newIndex = (currentIndex + step) % alphabetCount;

  const wrappedIndex = newIndex < 0 ? newIndex + alphabetCount : newIndex;

  return String.fromCharCode(base + wrappedIndex);
}