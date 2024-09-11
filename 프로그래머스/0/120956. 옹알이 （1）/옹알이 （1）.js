const sounds = ["aya", "ye", "woo", "ma"];

const check = (string) => {
  let previous = "";
  while (string.length > 0) {
    let matched = false;
    for (const sound of sounds) {
      if (string.startsWith(sound) && sound !== previous) {
        matched = true;
        previous = sound;
        string = string.slice(sound.length);
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
};

function solution(babbling) {
  return babbling.filter(check).length;
}
