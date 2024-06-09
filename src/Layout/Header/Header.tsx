import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'

function Header() {
    return (
        <div className={s.header}>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/'>Anime</NavLink>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Catalog_Anime'>Catalog Anime</NavLink>
</div>
    );
}

export default Header;