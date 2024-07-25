import React, { useEffect } from 'react';
import s from '../CatalogAnime/catalogAnime.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import AnimeCard from '../CatalogAnime/AnimeCard';
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { set } from '../CatalogAnime/ButtonLikes';


const MyFavorite = () => {
   
    const animeList = useAppSelector(store => store.animeCard.favoriteAnimeList)
    console.log(animeList)

    return (
        <div className={s.catalog}>
              {
              Array.from(set).map(item => (
                <article> 
                <AnimeCard  id = {item.id}
                attributes = {item.attributes}
                />
                </article> 
            ))} 

        </div>
    );
};

export default MyFavorite;