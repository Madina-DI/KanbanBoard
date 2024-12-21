import React from 'react';
import './TaskBoard.css';
import TaskList from '../TaskList/TaskList';

const TaskBoard = ({ data, setData }) => {

    const moveTask = (taskId) => {
        let taskToMove = null;
        const updatedData = data.map((column, index) => {
            if (column.issues.some((issue) => issue.id === taskId)) {
                taskToMove = column.issues.find((issue) => issue.id === taskId); //находим задачу которую нужно перенести 
                return {
                    ...column,
                    issues: column.issues.filter((issue) => issue.id !== taskId), //исключаем ее из текущей колонки 
                };
            } 

            if (taskToMove && index > 0 && data[index - 1].issues.length > 0) {

                return {
                ...column,
                issues: [...column.issues, taskToMove], // Добавляем задачу 
                };
            } 
            return column; //остальные колонки остаются без изменений
        }); 
    setData(updatedData);// Обновляем глобальное состояние с помощью setData
    }
 
return (
    <div className='task-board'>
        {data.map((column) => (
            <TaskList 
            key={column.title} 
            title={column.title} 
            tasks={column.issues} 
            moveTask={moveTask}
            data={data}
            setData={setData}
            backlogTasks={data.find((col) => col.title === 'backlog')?.issues || []}
            readyTasks={data.find((col) => col.title === 'ready')?.issues || []}
            inprogressTasks={data.find((col) => col.title === 'in progress')?.issues || []}
            />
        ))}
    </div>
    );
};

export default TaskBoard;