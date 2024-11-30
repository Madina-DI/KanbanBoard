import React from 'react';
import './TaskBoard.css';

const TaskBoard = () => {
    const columns= ['Backlog', 'Ready', 'In progress', 'Finished']
    return (
        <div className="task-board">
            {columns.map((column, index) => (
                <taskList key={index} title={column} />
            ))}
        </div>
    )
}

export default TaskBoard;