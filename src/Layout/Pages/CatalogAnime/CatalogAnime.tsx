
import React, { useCallback, useEffect, useState } from 'react';
import { getAnimeData } from '../../../api/catalogAnimeApi';
import s from './catalogAnime.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCatalogAnime } from '../../../store/animeCatalog/animeCardSlice';
import AnimeCard from './AnimeCard';
import ButtonBefore from './ButtonBefore';


function CatalogAnime() {

    const catalogAnime = useAppSelector(store => store.animeCard.catalogAnime)
    const dispatch = useAppDispatch()
    const getCatalogAnime = useCallback( async () => {
        const data = await getAnimeData()
        dispatch(setCatalogAnime(data))
    }, [dispatch])

    useEffect(() => {
        getCatalogAnime()
    }, [getCatalogAnime])

    
    return (
        <div className = {s.catalog}>

         <>   {catalogAnime.map(item=> (
                <AnimeCard 
                canonicalTitle = {item.attributes.canonicalTitle}
                posterImage={item.attributes.posterImage}
                status={item.attributes.status}
                averageRating={item.attributes.averageRating}
                />
            ))} </> 

        <ButtonBefore/>

        </div>
    );
}

export default CatalogAnime;
  