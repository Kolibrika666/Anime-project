import React, { useEffect, useState } from 'react';
import { getAnime } from '../../../api/catalogAnimeApi';

function CatalogAnime() {
    const [anime, setAnime] = useState([])
    const getAnimeCard = async() => {
        try {
            const data = await getAnime()
            console.log(data)
setAnime(data)

        } catch(error) {
            console.error(error.message)
        }

    }
useEffect(() => {
    getAnimeCard()
}, []) 

    return (
        <div>
            
        </div>
    );
}

export default CatalogAnime;