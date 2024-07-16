import React from 'react';
import s from './animePage.module.scss'
import { useAppSelector } from '../../../store';

const AnimePage = () => {

    const idAnime = useAppSelector(store => store.animeCard.id)

    let id = idAnime

    

    return (
        <div className= {s.animePage}>

            <h1>{idAnime}</h1>
 {/* <img src={posterImage.medium}/> */}
            "canonicalTitle": "Cowboy Bebop",
            "averageRating": "82.21",
            "startDate": "1998-04-03",
            //   "endDate": "1999-04-24",
            //   "nextRelease": null,
            "synopsis": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
            "status": "finished",
            "episodeCount": 26,
        
        </div>
    );
};

export default AnimePage;

