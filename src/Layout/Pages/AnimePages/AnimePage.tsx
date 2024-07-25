import React, { useCallback, useEffect } from 'react';
import s from './animePage.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { NavLink } from 'react-router-dom';





const AnimePage = () => {

    const anime = useAppSelector(store => store.animeCard.animeCheck)

    return (
        <div className = {s.animePage}>
             <h1>{anime.attributes.canonicalTitle}</h1>
             <div>
            <picture>
            <img src={anime.attributes.posterImage.medium}/>
            </picture>
            <article>
            <p><b> Status: </b>{anime.attributes.status}</p>
            <p><b>AverageRating:</b> {anime.attributes.averageRating}</p>
            <p><b>StartDate:</b> {anime.attributes.startDate}</p>
            <p><b>EndDate:</b> {anime.attributes.endDate}</p>
            <p><b>EpisodeCount:</b> {anime.attributes.episodeCount}</p>
            <p><b>Synopsis:</b> {anime.attributes.synopsis}</p>
            <button><span><NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Catalog_Anime'>Catalog Anime</NavLink></span></button>
            </article>
            </div>

        </div>
    );
};

export default AnimePage;

