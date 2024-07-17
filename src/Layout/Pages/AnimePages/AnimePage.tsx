import React, { useCallback, useEffect } from 'react';
import s from './animePage.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';





const AnimePage = () => {

    const anime = useAppSelector(store => store.animeCard.animeCheck)

    return (
        <div className = {s.animePage}>
            <h1>{anime.attributes.canonicalTitle}</h1>
        </div>
    );
};

export default AnimePage;

