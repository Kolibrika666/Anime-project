import React, { useCallback, useEffect } from 'react';
import s from './animePage.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { NavLink } from 'react-router-dom';





const AnimePage = () => {

    const anime = useAppSelector(store => store.animeCard.animeCheck)

    return (
        <div className = {s.animePage}>
            <h1>{anime.attributes.canonicalTitle}</h1>

            <img src={anime.attributes.posterImage.medium}/>

           <p> Status: {anime.attributes.status}</p>
            <p>AverageRating: {anime.attributes.averageRating}</p>
            <p>StartDate: {anime.attributes.startDate}</p>
            <p>EndDate: {anime.attributes.endDate}</p>
            <p>EpisodeCount: {anime.attributes.episodeCount}</p>
            <p>Synopsis: {anime.attributes.synopsis}</p>

            <button><span><NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Catalog_Anime'>Catalog Anime</NavLink></span></button>
            
        </div>
    );
};

export default AnimePage;

