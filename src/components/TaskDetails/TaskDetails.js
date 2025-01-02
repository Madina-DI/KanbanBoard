import React, { useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import './TaskDetails.css';

const TaskDetails = ({ data, setData }) => {
    const { id } = useParams(); // Получаем id из URL
    const navigate = useNavigate(); // Для возврата на главную страницу

    // Находим задачу по id
    const task = data
        ?.flatMap((column) => column.issues) // Проходим по всем задачам во всех колонках
        .find((issue) => issue.id === id); // Ищем задачу по id

    const [description, setDescription] = useState(task?.description || 'This task has no description');

    // Сохранение изменений в описании
    const handleDescriptionChange = (newDescription) => {
        const updatedData = data.map((column) => ({
            ...column,
            issues: column.issues.map((issue) =>
                issue.id === id ? { ...issue, description: newDescription } : issue // Обновляем описание для задачи
            ),
        }));
        setData(updatedData); // Обновляем данные в общем состоянии
    };

    // Если задачи не существует
    if (!task) {
        return <p>Task not found!</p>;
    }

    return (
        <div className="task-details">
            <div className="task-details__text">
                {/* Верхняя часть с названием задачи и крестиком */}
                <div className="task-details__header">
                    <h2>{task.name}</h2>
                    <button className="task-details__close" onClick={() => navigate('/')}>✖</button>
                </div>

                {/* Содержимое задачи */}
                <textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        handleDescriptionChange(e.target.value);
                    }}
                    className="task-details__textarea"
                />
            </div>
        </div>
    );
};

export default TaskDetails;
