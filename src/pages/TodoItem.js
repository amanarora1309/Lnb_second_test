import React from 'react';

const TodoItem = ({ task, onDelete }) => {
    return (
        <li>
            <span>{task.title}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;