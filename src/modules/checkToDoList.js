function checkTodo(i, toDoList) {
  toDoList[i].completed = !toDoList[i].completed;
  return toDoList;
}

module.exports = checkTodo;
