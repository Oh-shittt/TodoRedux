import React, { useState } from 'react';
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addTodo, toggleTodo, deleteTodo } from './Store';
import './Store'

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, NewTodo] = useState('');
=======

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodosGate: Todo[] = [

];

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(TodosGate);
  const [newTodo, setNewTodo] = useState<string>('');
>>>>>>> ff8b1b38262ced44fe5acc69944675853b7f77c1

  const generateRandomId = () => {
    const min = 1;
    const max = 900;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    return (randomId)
  }

  const AddTodo = () => {
    if (newTodo.trim() !== '') {
<<<<<<< HEAD
      dispatch(addTodo({ text: newTodo, id: todos.length + generateRandomId() }));
      NewTodo('');
=======
      const newTodoItem: Todo = {
        id: generateRandomId(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
>>>>>>> ff8b1b38262ced44fe5acc69944675853b7f77c1
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
