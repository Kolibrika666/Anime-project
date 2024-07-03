
import React, { useEffect, useState } from 'react';
import { AnimeCardTypes, getAnimeCard } from '../../../api/catalogAnimeApi';
import AnimeCard from './AnimeCard';
import s from './catalogAnime.module.scss'


function CatalogAnime() {

    const [card, setCard] = useState<AnimeCardTypes[]>([])

    const getAnimeCardList = async () => {
        const data = await getAnimeCard()
        setCard(data)
    }

    useEffect(() => {
        getAnimeCardList()
    }, [])
    
    return (
        <div className = {s.catalog}>
            <AnimeCard/>
            <AnimeCard/>
            <AnimeCard/>

            {/* {card.map(item=> (
                <p key = {item.id}>{item.attributes.canonicalTitle}</p>
            ))} */}

        </div>
    );
}

export default CatalogAnime;
  