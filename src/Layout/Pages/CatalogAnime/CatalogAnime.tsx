
import React, { useCallback, useEffect, useState } from 'react';
import { getAnimeData, getAnimeDataAfter } from '../../../api/catalogAnimeApi';
import s from './catalogAnime.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCatalogAnime } from '../../../store/animeCatalog/animeCardSlice';
import AnimeCard from './AnimeCard';
import { useInView } from 'react-intersection-observer';


function CatalogAnime() {

    const catalogAnime = useAppSelector(store => store.animeCard.catalogAnime)
    const dispatch = useAppDispatch()
    const getCatalogAnime = useCallback( async () => {
        const data = await getAnimeData()
        dispatch(setCatalogAnime(data))
    }, [dispatch])

    const getAnimeAfter = useCallback( async () => {
        const data = await getAnimeDataAfter()
        dispatch(setCatalogAnime(data))
    }, [dispatch])

    useEffect(() => {
        getCatalogAnime()
    }, [getCatalogAnime])

    const {ref , inView} = useInView({
        onChange: (inView) => {
                    if (inView) {
                        getAnimeAfter()
                        window.scrollBy(0, -200)
                        console.log(1)
                    }
                },
            })

    return (

        <div className = {s.catalog} >
           {catalogAnime.map(item=> (
            <article>
                <AnimeCard  id = {item.id}
                attributes = {item.attributes}
                />
            </article>
            ))} 

        <p ref={ref}></p>

        </div>
    );
}

export default CatalogAnime;
  