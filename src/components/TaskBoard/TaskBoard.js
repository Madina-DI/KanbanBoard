import './TaskBoard.css';
import TaskList from '../TaskList/TaskList';
import React, { useState, useEffect } from 'react';
import '@fontsource/roboto'; /* Основной стиль */
const TaskBoard = ({ data, setData }) => { 
      // Локальные состояния для каждой колонки
     const [backlogTasks, setBacklogTasks] = useState([]);
     const [readyTasks, setReadyTasks] = useState([]);
     const [inprogressTasks, setInprogressTasks] = useState([]);
      // Обновляем состояния при изменении данных
     useEffect(() => {
        if (data) {
            setBacklogTasks(data.find((col) => col.title === 'backlog')?.issues || []);
            setReadyTasks(data.find((col) => col.title === 'ready')?.issues || []);
            setInprogressTasks(data.find((col) => col.title === 'in progress')?.issues || []);
        }
     }, [data]); // Зависимость от data
     if (!data) {
        return <p>Loading...</p>; //если data еще не загружается
    }
    const moveTask = (taskId, currentColumnTitle) => {
        
        console.log("Moving task:", taskId);
        console.log("From column:", currentColumnTitle);

        let taskToMove = null;
        const updatedData = data.map((column, index) => { 
            const isSearchTask = column.issues.some((issue) => issue.id === taskId);
            if (isSearchTask) {
                taskToMove = column.issues.find((issue) => issue.id === taskId); //находим задачу которую нужно перенести 
                return {
                    ...column,
                    issues: column.issues.filter((issue) => issue.id !== taskId), //исключаем ее из текущей колонки 
                };
            } 
            if (taskToMove && index > 0 && data[index - 1].issues.length > 0) {
                if (column.title === currentColumnTitle) {
            
                return {
                ...column,
                issues: [...column.issues, taskToMove], // Добавляем задачу 
                };
                }
            } 
            return column; //остальные колонки остаются без изменений
        }); 
    setData([...updatedData]);// Обновляем глобальное состояние с помощью setData
    }
 return (
    <div className='task-board'>
        {data.map((column) => (
            <TaskList 
            key={column.title} 
            title={column.title} 
            currentColumnTitle={column.title}
            tasks={column.issues} 
            moveTask={moveTask}
            data={data}
            setData={setData}
            backlogTasks={backlogTasks}
            readyTasks={readyTasks}
            inprogressTasks={inprogressTasks}
            />
        ))}
    </div>
    );
};

export default TaskBoard;