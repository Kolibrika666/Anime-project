import React, { useCallback, useEffect } from 'react';
import s from './animePage.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { NavLink } from 'react-router-dom';
import { raiting } from '../CatalogAnime/AnimeCard';





const AnimePage = () => {

    const anime = useAppSelector(store => store.animeCard.animeCheck)

    const date = (d: string) => {
        let date = new Date(d)
        return  date.toLocaleDateString("en-US")
    }

    return (
        <div className = {s.animePage}>
             <h1>{anime.attributes.canonicalTitle}</h1>
             <div>
            <picture>
            <img src={anime.attributes.posterImage.medium}/>
            </picture>
            <article>
            <p><b> Status: </b>{anime.attributes.status}</p>
            <p><b>Viewer rating:</b> {raiting(anime.attributes.averageRating)}</p>
            <p><b>Date of completion:</b> {date(anime.attributes.startDate)}</p>
            <p><b>EndDate:</b> {date(anime.attributes.endDate)}</p>
            <p><b>Number of episodes:</b> {anime.attributes.episodeCount}</p>
            <p><b>Description:</b> {anime.attributes.synopsis}</p>
            <button><span><NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Catalog_Anime'>Catalog Anime</NavLink></span></button>
            </article>
            </div>

        </div>
    );
};

export default AnimePage;

