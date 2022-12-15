/*
* @jest-environment jsdom
*/
const addTodoTask = require('./src/modules/addTodoTask.js');
const removeToDo = require('./src/modules/removeToDo.js'); 

describe('todo functions - ADD & REMOVE', () => {
  test('add a todo', () => {
    const todo = {
      description: 'test',
      completed: false,
      index: 0,
    };
    const todoList = [];

    const result = addTodoTask(todo, todoList);
    expect(todoList).toEqual(result);
    localStorage.setItem('toDoListItem', JSON.stringify(result));

    expect(JSON.parse(localStorage.getItem('toDoListItem'))).toEqual(result);
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += '<div class="list-item">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const list = document.querySelectorAll('.list-item');
    expect(list).toHaveLength(result.length);
  });

    test('delete an item', () => {
    const todoList = [
      {
        desc: 'one',
        completed: false,
        index: 0,
      },
      {
        desc: 'two',
        completed: false,
        index: 1,
      },
    ];
    const i = 0;
    const output = removeToDo(i, todoList);
    expect(output).toEqual([{ desc: 'two', completed: false, index: 1 }]);
    localStorage.setItem('toDoListItem', JSON.stringify(output));
    expect(JSON.parse(localStorage.getItem('toDoListItem'))).toEqual(output);
    document.body.innerHTML = '';
    for (let i = 0; i < output.length; i += 1) {
      document.body.innerHTML += '<div class="list-item">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const list = document.querySelectorAll('.list-item');
    expect(list).toHaveLength(output.length);
  });
});