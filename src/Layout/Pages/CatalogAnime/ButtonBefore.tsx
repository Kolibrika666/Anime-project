import React, { useCallback } from 'react';
import {  getAnimeDataBefore } from '../../../api/catalogAnimeApi';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCatalogAnime } from '../../../store/animeCatalog/animeCardSlice';


const ButtonBefore = () => {

    
    const catalogAnime = useAppSelector(store => store.animeCard.catalogAnime)
    const dispatch = useAppDispatch()
    const getCatalogAnime = useCallback( async () => {
        const data = await getAnimeDataBefore()
        dispatch(setCatalogAnime(data))
    }, [dispatch])

    return (
        <div>
            <button onClick={getCatalogAnime}><span>Посмотреть ещё</span></button>
        </div>
        
    );
};

export default ButtonBefore;

