import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ title, description }) => {
    return (
        <div className="task-details">
            <h2>{title}</h2>
            <p>{description || 'This task has no description'}</p>
            <button className="close-button">×</button>
        </div>
    );
};

export default TaskDetails;
