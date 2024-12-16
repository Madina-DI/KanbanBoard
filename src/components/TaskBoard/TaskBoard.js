import React from 'react';
import './TaskBoard.css';
import TaskList from '../TaskList/TaskList';

const TaskBoard = ({ data, setData }) => {

    const moveTaskToReady = (taskId) => {
        let taskToMove = null;
        const updatedData = data.map((column) => {
            if (column.title === 'backlog') {
                taskToMove = column.issues.find((issue) => issue.id === taskId); //находим задачу которую нужно перенести из колонки backlog
                return {
                    ...column,
                    issues: column.issues.filter((issue) => issue.id !== taskId), //исключаем ее из колонки backlog
                };
            } 

            if (column.title === 'ready' && taskToMove) {

                return {
                ...column,
                issues: [...column.issues, taskToMove], // Добавляем задачу в Ready
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
            moveTaskToReady={moveTaskToReady}
            data={data}
            setData={setData}
            backlogTasks={data.find((col) => col.title === 'backlog')?.issues || []}
            />
        ))}
    </div>
    );
};

export default TaskBoard;