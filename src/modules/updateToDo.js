function updateTodo(i, toDoList, newDesc) {
  toDoList[i].desc = newDesc;
  return toDoList;
}

module.exports = updateTodo;
