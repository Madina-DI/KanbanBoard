import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Awesome Kanban Board</h1>
            <div className="user-menu">
                <span className="avatar">A</span>
                <span className="arrow">▼</span>
            </div>
        </header>
    )
}

export default Header;