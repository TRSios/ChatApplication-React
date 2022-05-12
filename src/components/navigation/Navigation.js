import React from 'react';
import {NavLink} from 'react-router-dom';
import {navItems} from '../../data/navItems';
import './Navigation.scss';

const Navigation = () => {
    const renderNavItems = () => {
        return navItems.map(navItem => {
            return (
                <NavLink
                    key={navItem.title}
                    to={navItem.href}
                    className={({ isActive }) => (isActive ? 'active-nav-item' : '')}>
                    {navItem.title}
                </NavLink>
            );
        });
    };

    return (
        <div
            className='nav'>
            <nav>
                {renderNavItems()}
            </nav>
        </div>
    );
}

export default Navigation;
