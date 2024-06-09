export type AnimeCardType = {
    id: string;
    links: LinksType;
    canonicalTitle: string;
    averageRating: string;
    status: string;
    posterImage: PosterImageType;
}

export type LinksType = {
    self: string;
}

export type PosterImageType = {
    tiny: string;
        large: string;
        small: string;
        medium: string;
        original: string;
}

export const getAnime = async() => {
    const response = await fetch ('https://kitsu.io/api/edge/anime')
     console.log(response)
     if (response.status === 200)  {
        const data = response.json()
        return data
     }
  throw new Error('some error')
     }