import React from 'react';
import './TaskBoard.css';
import TaskList from '../TaskList/TaskList';

const TaskBoard = ({ data, setData }) => {
 
return (
    <div className='task-board'>
        {data.map((column, index) => (
            <TaskList 
            key={column.title} 
            title={column.title} 
            tasks={column.issues} 
            data={data}
            setData={setData}
            />
        ))}
    </div>
    );
};

export default TaskBoard;