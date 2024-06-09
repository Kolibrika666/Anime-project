import React from 'react';
import s from './Main.module.scss'
import CatalogAnime from './CatalogAnime/CatalogAnime';

function Main() {
    return (
        <div className= {s.main}>
            <CatalogAnime/>
        </div>
    );
}

export default Main;