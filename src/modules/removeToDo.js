function deleteAnItem(i, toDoList) {
  toDoList.splice(i, 1);
  return toDoList;
}

module.exports = deleteAnItem;
