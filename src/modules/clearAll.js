function clearAllCompleted(toDoList) {
  toDoList = toDoList.filter((todo) => todo.completed !== true);
  let i = 0;
  toDoList.forEach((todo) => {
    todo.index = i + 1;
    i += 1;
  });
  return toDoList;
}

module.exports = clearAllCompleted;