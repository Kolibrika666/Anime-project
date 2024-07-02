
import React, { useEffect, useState } from 'react';
import { AnimeCardTypes, getAnimeCard } from '../../../api/catalogAnimeApi';


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
        <div>

        </div>
    );
}

export default CatalogAnime;
 