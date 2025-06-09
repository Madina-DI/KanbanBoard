import React, { useEffect, useState } from 'react';
import './TaskList.css';
import '@fontsource/roboto'; /* Основной стиль */
import { Link } from 'react-router-dom';

const TaskList = ({ title, tasks, data, setData, moveTask, backlogTasks, readyTasks, inprogressTasks }) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [selectedTask, setSelectedTask] = useState('');
    const [isdropDownVisible, setIsDropDownVisible] = useState(false);
    // const [isAddCardDisabled, setIsAddCardDisabled] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDropDownVisibleReady, setIsDropDownVisibleReady] = useState(false);



    useEffect(() => {
        
        if (title === 'ready') {
            setIsDisabled(backlogTasks.length === 0); // Если Backlog пустой, отключаем кнопку
        } else if (title === 'in progress') {
            setIsDisabled(readyTasks.length === 0); // Если Ready пустой, отключаем кнопку
        } else if (title === 'finished') {
            setIsDisabled(inprogressTasks.length === 0); // Если In Progress пустой, отключаем кнопку
        }
    }, [backlogTasks, readyTasks, inprogressTasks, title]); // Зависимости для динамического обновления

    const handleMoveTask = (currentColumnTitle) => {
        if (selectedTask) {
            moveTask(selectedTask, currentColumnTitle); // Перемещаем задачу
            setSelectedTask(''); // Сбрасываем выбранное значение
        }

        if (newTaskName.trim () === '') {
            return;
        }
        const newTask = {
            id: Date.now().toString(),
            name: newTaskName,
            description: '',
        };

        const updatedData = data.map((column) => {
            if (column.title === title) {
                return {
                    ...column,
                    issues: [...column.issues, newTask],
                };
            }
            return column;
        });

        setData(updatedData);
        setNewTaskName('');
        setIsAddingTask(false);
    };



    return (
        <div className="task-list">
            <h3 className="task-list__title">{title}</h3>
            <div className="task-list__text">
                {tasks.map((task) => (
                    <div key={task.id} className="task-list__text-details">
                        <Link to={`/tasks/${task.id}`}>
                            {task.name}
                        </Link>
                    </div>
                ))}
            </div>
            
            {title === 'backlog' && (
                <div className='task-list__button'>
                    {isAddingTask ? (
                        <div className='task-list__button-input'>
                            <div>
                                <input className='task-list__button-text' 
                                    type="text"
                                    placeholder="New task title..."
                                    value={newTaskName}
                                    onChange={(e) => setNewTaskName(e.target.value)}
                                />
                            </div>
                            <button onClick={() => handleMoveTask('backlog')} className='task-list__button-submit'>Submit</button>
                        </div>
                    ) : (

                        <button onClick={() => setIsAddingTask(true)} className='task-list__button-add'>+Add Card</button>
                    )}
                </div>
            )}
            {title === 'ready' && (
                <div className="task-list__dropdown">
                    {!isDropDownVisibleReady ? (
                    <button 
                        className="task-list__button-add" 
                        onClick={() => setIsDropDownVisibleReady(true)}
                        disabled={backlogTasks.length === 0}>+Add card</button>
                    ) : (
                    <div>
                        <select
                            className="task-list__dropdown-select"
                            value={selectedTask}
                            onChange={(e) => {
                                const selectedId = e.target.value;
                                setSelectedTask(selectedId);
                                moveTask(selectedId, 'ready');
                                setIsDropDownVisibleReady(false);
                            }}
                        >
                            <option value=""></option>
                            {backlogTasks.map((task) => (
                                <option key={task.id} value={task.id}>
                                {task.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    )}
                </div>
            )}
            {title === 'in progress' && (
                <div className="task-list__dropdown">
                    {!isdropDownVisible ? (
                        <button className='task-list__button-add' 
                        onClick={() => setIsDropDownVisible (true)}
                        disabled={isDisabled}>+Add card</button>
                    ) : (
                        <div>
                            <select className='task-list__dropdown-select' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
                                <option value=""></option>
                                {readyTasks.map((task) => (
                                    <option onClick={() => {
                                        moveTask(selectedTask, title);
                                        setIsDropDownVisible(false)
                                    }} 
                                    key={task.id} value={task.id}>
                                        {task.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
            )}

            {title === 'finished' && (
                <div className="task-list__dropdown">
                    {!isdropDownVisible ? (
                        <button className='task-list__button-add' onClick={() => setIsDropDownVisible (true)}
                        disabled={isDisabled}>+Add card</button>
                    ) : (
                        <div>
                            <select className='task-list__dropdown-select' value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
                                <option value=""></option>
                                {inprogressTasks.map((task) => (
                                    <option onClick={() => {
                                        handleMoveTask('finished');
                                        setIsDropDownVisible(false);
                                    }} key={task.id} value={task.id}>
                                        {task.name} 
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};


export default TaskList; 