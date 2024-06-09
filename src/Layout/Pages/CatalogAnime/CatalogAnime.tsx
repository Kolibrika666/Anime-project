import React, { useEffect, useState } from 'react';
import { getAnime } from '../../../api/catalogAnimeApi';
import s from './catalogAnime.module.scss'

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
        <div className={s.catalog}>
            rye5ur6
        </div>
    );
}

export default CatalogAnime;