import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ title, tasks, data, setData, moveTaskToReady, backlogTasks }) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [selectedTask, setSelectedTask] = useState('');

    const handleMoveTask = () => {
        if (selectedTask) {
            moveTaskToReady(selectedTask); // Перемещаем задачу
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
                        {task.name}
                    </div>
                ))}
            </div>
            {title === 'ready' && backlogTasks.length > 0 && (
                <div className="task-list__dropdown">
                    <select
                        value={selectedTask}
                        onChange={(e) => setSelectedTask(e.target.value)}
                    >
                        <option value="">Select a task</option>
                        {backlogTasks.map((task) => (
                            <option key={task.id} value={task.id}>
                                {task.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleMoveTask}>+Add card</button>
                </div>
            )}

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
                            <button onClick={handleMoveTask} className='task-list__button-submit'>Submit</button>
                        </div>
                    ) : (
                        <button onClick={() => setIsAddingTask(true)} className='task-list__button-add'>+Add Card</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default TaskList;
