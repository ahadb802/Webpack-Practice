import addTodoTask from './addTodoTask.js';
import removeToDo from './removeToDo.js';
import updateToDo from './updateToDo.js';
import checkToDoList from './checkToDoList.js';
import clearAll from './clearAll.js';

const addInput = document.querySelector('.todo-input');
let todos = localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.getItem('toDoList')) : [];
let index = todos.length;
const todoDiv = document.querySelector('#todoList');
const clearBtn = document.querySelector('.clear-button');

const render = () => {
  if (todos !== null) {
    todoDiv.innerHTML = '';
    todos.forEach((todo) => {
      const check = todo.completed === true ? 'checked' : '';
      todoDiv.innerHTML += `
        <div class="todos">
          <input type="checkbox" class="todo-check " value="${todo.completed}" ${check}>
          <input type="text" class="todo-desc clear-border ${check}" value="${todo.desc}">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <button type="button" class="trash-btn"><i class="fa fa-trash"></i></button>
        </div>
      `;
    });
  }

  for (let i = 0; i < todoDiv.querySelectorAll('.todos').length; i += 1) {
    const todoRow = todoDiv.querySelectorAll('.todos')[i];
    // eslint-disable-next-line no-loop-func
    todoRow.querySelector('.todo-check').addEventListener('click', () => {
      const result = checkToDoList(i, todos);
      localStorage.setItem('todos', JSON.stringify(result));
      render();
    });

    todoRow.addEventListener('focusin', () => {
      todoRow.classList.add('active');
      todoRow.querySelector('.todo-desc').classList.add('active');
      todoRow.querySelector('.trash-btn').style.display = 'block';
      todoRow.querySelector('.fa-ellipsis-vertical').style.display = 'none';
    });

    // eslint-disable-next-line no-loop-func
    todoRow.querySelector('.trash-btn').addEventListener('click', () => {
      const updTodo = removeToDo(i, todos);
      for (let a = i; a < updTodo.length; a += 1) {
        updTodo[a].index -= 1;
      }
      index -= 1;
      localStorage.setItem('toDoList', JSON.stringify(updTodo));
      render();
    });

    todoRow.addEventListener('focusout', (e) => {
      const parent = todoRow;
      const leavingParent = !parent.contains(e.relatedTarget);
      if (leavingParent) {
        todoRow.classList.remove('active');
        todoRow.querySelector('.todo-desc').classList.remove('active');
        todoRow.querySelector('.fa-ellipsis-vertical').style.display = 'flex';
        todoRow.querySelector('.trash-btn').style.display = 'none';
      }
    });

    // eslint-disable-next-line no-loop-func
    todoRow.querySelector('.todo-desc').addEventListener('change', (e) => {
      const result = updateToDo(i, todos, e.target.value);
      localStorage.setItem('toDoList', JSON.stringify(result));
    });
  }
};

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addInput.value !== '') {
      const todoVal = addInput.value;
      addInput.value = '';
      index += 1;
      const updTodo = addTodoTask({ index, desc: todoVal, completed: false }, todos);
      localStorage.setItem('toDoList', JSON.stringify(updTodo));
      render();
    }
  }
});

clearBtn.addEventListener('click', () => {
  todos = clearAll(todos);
  index = todos.length;
  localStorage.setItem('toDoList', JSON.stringify(todos));
  render();
});

window.onload = render();