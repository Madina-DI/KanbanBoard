import React from 'react';
import './Header.css';
import './DropdownMenu/DropdownMenu.js';
import DropdownMenu from './DropdownMenu/DropdownMenu.js';


const Header = () => {
    return (
        <header>
            <div className="user">
                <h1 className="user-name">Awesome Kanban Board</h1>
                <DropdownMenu />
            </div>
        </header>
    )
}

export default Header;