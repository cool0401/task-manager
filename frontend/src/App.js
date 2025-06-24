import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://127.0.0.1:5000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', due_date: '' });

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
    const interval = setInterval(fetchTasks, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.due_date) return alert('All fields required');
    await axios.post(API, form);
    setForm({ title: '', description: '', due_date: '' });
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input type="datetime-local" value={form.due_date} onChange={e => setForm({ ...form, due_date: e.target.value })} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} - {new Date(t.due_date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
