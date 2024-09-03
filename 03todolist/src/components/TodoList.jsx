import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addTodo,removeTodo}from '../features/todoSlice';
import TodoItem from './TodoItem';

const TodoList = ()=>{
    const [todoText, setTodoText]= useState('');
    const todos = useSelector((state)=>state.todo.todo)
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todoText.trim()) {
          dispatch(addTodo({
            id: Date.now(),
            text: todoText,
            completed: false,
          }));
          setTodoText('');
        }
      };
    

return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
)
   };


export default TodoList;
