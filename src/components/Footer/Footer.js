import React from 'react';
import './Footer.css';

const Footer = ({ activeTasks, finishedTasks }) => {
    return (
        <footer className='footer'>
            <span>Active tasks: {activeTasks}</span>
            <span>Finished tasks: {finishedTasks}</span>
            <span>Kanban Board</span>
        </footer>
    )
}

export default Footer;