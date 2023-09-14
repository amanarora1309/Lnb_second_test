import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === '') {
            return;
        }

        const task = { id: Date.now(), title: newTask };
        setTasks([...tasks, task]);
        setNewTask('');
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <br />
            <br />
            <ul>
                {filteredTasks.map((task) => (
                    <TodoItem key={task.id} task={task} onDelete={deleteTask} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;