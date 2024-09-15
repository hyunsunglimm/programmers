const onPrev = (pos) => {
  let [min, sec] = pos.split(":").map((v) => Number(v));
  if (min === 0 && sec < 10) return "00:00";
  sec -= 10;

  if (sec < 0) {
    min--;
    sec += 60;
  }

  return String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
};

const onNext = (pos, video_len) => {
  let [min, sec] = pos.split(":").map((v) => Number(v));
  const [fullMin, fullSec] = video_len.split(":").map((v) => Number(v));

  sec += 10;

  if (sec > 60) {
    min++;
    sec -= 60;
  }
  if (fullMin < min || (fullMin === min && fullSec < sec)) return video_len;

  return String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
};

const isOpening = (op_start, op_end, pos) => {
  const [startMin, startSec] = op_start.split(":").map((v) => Number(v));
  const [endMin, endSec] = op_end.split(":").map((v) => Number(v));
  const [min, sec] = pos.split(":").map((v) => Number(v));

  const isStartIn = startMin < min || (startMin === min && startSec <= sec);
  const isEndIn = endMin > min || (endMin === min && endSec >= sec);

  return isStartIn && isEndIn ? true : false;
};

function solution(video_len, pos, op_start, op_end, commands) {
  const result = commands.reduce((acc, cur) => {
    if (isOpening(op_start, op_end, acc)) {
      return cur === "next" ? onNext(op_end, video_len) : onPrev(op_end);
    }
    return cur === "next" ? onNext(acc, video_len) : onPrev(acc);
  }, pos);

  return isOpening(op_start, op_end, result) ? op_end : result;
}