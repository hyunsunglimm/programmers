function solution(phone_number) {
  const length = phone_number.length;

  return phone_number.slice(-4).padStart(length, "*");
}