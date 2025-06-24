const axios = require('axios');

const POLL_INTERVAL = 60000; // 1 minute

const checkTasks = async () => {
  try {
    const res = await axios.get('http://localhost:5000/tasks');
    const now = new Date();
    const upcoming = res.data.filter(task => {
      const due = new Date(task.due_date);
      const diff = (due - now) / 60000; // minutes
      return diff > 0 && diff <= 10;
    });

    upcoming.forEach(task => {
      console.log(`Reminder: Task "${task.title}" is due at ${task.due_date}`);
      // Mock notification
      console.log(`(Mock) Email sent to user@example.com for task "${task.title}"`);
    });
  } catch (err) {
    console.error('Failed to fetch tasks:', err.message);
  }
};

setInterval(checkTasks, POLL_INTERVAL);