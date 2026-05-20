import React, { useEffect, useState } from 'react';
import axios from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const fetchTodos = async () => {
    const response = await axios.get('/api/tasks');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (task) {
      await axios.post('/api/tasks', { task });
      setTask('');
      fetchTodos();
    }
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (id) => {
    await axios.patch(`/api/tasks/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.task}</span>
            <button onClick={() => toggleComplete(todo._id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;