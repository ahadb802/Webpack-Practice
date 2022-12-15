/*
* @jest-environment jsdom
*/
const addTodoTask = require('./src/modules/addTodoTask.js');
const removeToDo = require('./src/modules/removeToDo.js');
const updateTodo = require('./src/modules/updateToDo.js');
const checkTodo = require('./src/modules/checkToDoList.js');
const clearAllCompleted = require('./src/modules/clearAll.js');

describe('todo functions - ADD - REMOVE - UPDATE - COMPLETED - CLEAR ALL', () => {
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

  test('edit an item', () => {
    const todoList = [
      {
        desc: 'one',
        completed: false,
        index: 0,
      },
    ];
    const i = 0;
    const output = updateTodo(i, todoList, 'edit the discription');
    expect(output).toEqual([{ desc: 'edit the discription', completed: false, index: 0 }]);
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

  test('check for complete item', () => {
    const todoList = [
      {
        desc: 'one',
        completed: false,
        index: 0,
      },
    ];
    const i = 0;
    const output = checkTodo(i, todoList);
    expect(output).toEqual([{ desc: 'one', completed: true, index: 0 }]);
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
  test('clearing all complete item', () => {
    const todoList = [
      {
        desc: 'one',
        completed: false,
        index: 0,
      },
      {
        desc: 'two',
        completed: true,
        index: 1,
      },
      {
        desc: 'three',
        completed: false,
        index: 2,
      },
    ];
    const output = clearAllCompleted(todoList);
    expect(output).toEqual([{ desc: 'one', completed: false, index: 1 }, { desc: 'three', completed: false, index: 2 }]);
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
