import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addTodo, toggleTodo, deleteTodo } from './Store';
import './Store'

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, NewTodo] = useState('');

  const generateRandomId = () => {
    const min = 1;
    const max = 900;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    return (randomId)
  }

  const AddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ text: newTodo, id: todos.length + generateRandomId() }));
      NewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => NewTodo(e.target.value)}
      />
      <button onClick={AddTodo}>Добавить</button>
      <ul>
        {todos.map(todos => (
          <li key={todos.id}>
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => dispatch(toggleTodo(todos.id))}
            />
            <span style={{ textDecoration: todos.completed ? 'line-through' : 'none' }}>
              {todos.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todos.id))}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
