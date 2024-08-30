function solution(todo_list, finished) {
  const arrLength = todo_list.length;
  const data = Array(arrLength)
    .fill()
    .map((_, i) => ({ title: todo_list[i], isDone: finished[i] }));

  return data.filter((v) => !v.isDone).map((v) => v.title);
}