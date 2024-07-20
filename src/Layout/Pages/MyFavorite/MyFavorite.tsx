import React from 'react';
import s from './MyFavorite.module.scss'
import { useAppSelector } from '../../../store';
import AnimeCard from '../CatalogAnime/AnimeCard';

const MyFavorite = () => {
    const animeList = useAppSelector(store => store.animeCard.favoriteAnimeList)



    return (
        <div className={s.favorite}>
             <>   {animeList.map(item=> (
                <AnimeCard  id = {item.id}
                attributes = {item.attributes}
                />
            ))} </> 

        </div>
    );
};

export default MyFavorite;