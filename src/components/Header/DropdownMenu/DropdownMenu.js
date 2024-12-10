import React, { useState } from 'react';
import './DropdownMenu.css';
import Avatar from './Avatar/user-avatar.png';
import ArrowDown from './Avatar/arrow-down.png';
import ArrowUp from './Avatar/arrow-up.png';
import LoginSigns from './Avatar/Rectangle.png';


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen (!isOpen);
    };

    return (
        <div className="dropdown-menu">
            <div className="user-menu" onClick={toggleMenu}>
                <img className="user-menu__avatar" src={Avatar} alt="User Avatar" />
                <img className="user-menu__arrow" src={isOpen ? ArrowUp : ArrowDown} alt="Arrow Icon" 
                />
            </div>
            {isOpen && (
                <div className='user-menu__login'>
                    <img className='user-menu__login-LoginSigns' src={LoginSigns} alt="" />
                    <li>Profile</li>
                    <li>Log Out</li>
                </div>
            )}   
        </div>
        );
    };

export default DropdownMenu;
