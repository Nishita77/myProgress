import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </li>
  );
};

export default TodoItem;
