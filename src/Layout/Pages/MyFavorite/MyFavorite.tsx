import React from 'react';
import s from '../CatalogAnime/catalogAnime.module.scss'
import { useAppSelector } from '../../../store';
import AnimeCard from '../CatalogAnime/AnimeCard';

const MyFavorite = () => {
    const animeList = useAppSelector(store => store.animeCard.favoriteAnimeList)



    return (
        <div className={s.catalog}>
              {animeList.map(item=> (
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