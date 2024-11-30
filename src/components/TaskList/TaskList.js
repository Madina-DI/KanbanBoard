import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = ({ title, tasks = [] }) => {
    return (
        <div className="task-list">
            <h3>{title}</h3>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task key={index} title={task.title} />
                ))}
            </div>
            <button className="add-card">+ Add card</button>
        </div>
    );
};

export default TaskList;