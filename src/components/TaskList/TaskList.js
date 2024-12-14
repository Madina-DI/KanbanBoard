import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ title, tasks, data, setData }) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [isAddingTask, setIsAddingTask] = useState(false);

    const handleAddTask = () => {
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
            {title === 'backlog' && (
                <div>
                    {isAddingTask ? (
                        <div>
                            <input
                                type="text"
                                placeholder="Введите название задачи"
                                value={newTaskName}
                                onChange={(e) => setNewTaskName(e.target.value)}
                            />
                            <button onClick={handleAddTask} className='task-list__addbutton-submit'>Submit</button>
                        </div>
                    ) : (
                        <button onClick={() => setIsAddingTask(true)}>Add Card</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default TaskList;
