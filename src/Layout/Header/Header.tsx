import React from 'react';
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={s.header}>
                <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/'> Catalog Anime</NavLink></div>
    );
}

export default Header;